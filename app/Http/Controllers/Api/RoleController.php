<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResources;
use Illuminate\Http\Request;
use App\Role;
use Validator;
use DB;

class RoleController extends Controller
{

    /**
     * store database table name which you can permission give
     * @param init $id
     * @return Illuminate\Http\Request  $request
     */
    public function showPermission(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'per_table' => 'required',
        ], [
            'per_table.required' => 'Please Select A Table :)-',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        if (DB::table('view_tables')->where('t_name', '=', $request->per_table)->exists()) {
            return response()->json(['error' => 'You Have already created permission on this table!']);
        } else {
            DB::table('view_tables')->insert([
                't_name' => $request->per_table
            ]);
            return response()->json(['error' => 'Table Name Inserted Successfully Complated!']);
        }
    }

    /**
     * Display all Table
     *
     * @return \Illuminate\Http\Response
     */
    public function database_table()
    {
        $tables = DB::select('SHOW TABLES');
        $table_data = [];
        $table_not_showing = ['failed_jobs', 'oauth_access_tokens', 'oauth_auth_codes', 'oauth_clients', 'oauth_personal_access_clients', 'oauth_refresh_tokens', 'password_resets', 'permission_role', 'permission_user', 'role_user', 'view_tables', 'migrations'];
        foreach ($tables as   $values) {
            foreach ($values as $key => $value) {
                $table_data[] = $value;
            }
        }
        $accual_table = array_diff($table_data, $table_not_showing);
        $array_product = array();
        $i = 0;
        foreach ($accual_table as $row_product) {
            $array_product[$i]["value"] = $row_product;
            $array_product[$i]["label"] = $row_product;
            $i++;
        }
        return response()->json(['tables' => $array_product]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = Role::all();
        return RoleResources::collection($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:roles',
            'display_name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $role = new Role();
        $role->name = $request->name;
        $role->display_name = $request->display_name;
        $role->description = $request->description;
        $role->save();
        if ($request->permission) {
            $role->syncPermissions($request->permission);
        }
        return response()->json(['success' => 'Role Created Success']);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'display_name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }
        $role = Role::findOrFail($id);
        $role->display_name = $request->display_name;
        $role->description = $request->description;
        $role->save();

        if ($request->permission) {
            $role->syncPermissions($request->permission);
        }
        return response()->json(['success' => 'Successfully update the ' . $role->display_name . ' role in the database.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $destroy = Role::where('id', $id)->first();
        if ($destroy) {
            $destroy->delete();
            return response()->json(['success' => 'Role Deleted Successfully']);
        }
    }
}
