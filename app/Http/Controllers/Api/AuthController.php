<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResourse;
use App\User;
use Validator;
use Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public $successStatus = 200;

    public function index()
    {
        $getUser = User::all();
        return UserResourse::collection($getUser);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'min:6|required_with:c_password',
            'c_password' => 'same:password'
        ], [
            'c_password.same' => 'Confirm Password Doesn\'t Match'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $user = User::firstOrNew(['email' => $request->email]);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->password = Hash::make($request['password']);
        $user->save();
        $response = ['success' => 'User Created Successfully'];
        return response($response);
    }



    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('inventory_token')->accessToken;
                $response = [
                    'token' => $token,
                    'user' => [
                        'name' => $user->name,
                        'email' => $user->email,
                    ]
                ];
                return response($response, 200);
            } else {
                $response = ['error' => 'Password does not Match'];
                return response($response, 422);
            }
        } else {
            $response = ['error' => 'User does not exist!'];
            return response($response, 422);
        }
    }
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been succesfully logged out!';
        return response($response, $this->successStatus);
    }
}
