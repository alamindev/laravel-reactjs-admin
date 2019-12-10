<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->group(function () {
    Route::post('login', 'Api\AuthController@login');
    Route::middleware('auth:api')->group(function () {
        Route::post('register', 'Api\AuthController@register');
        Route::get('/user', 'Api\AuthController@index')->name('users');
        Route::get('/logout', 'Api\AuthController@logout')->name('logout');
        // start coding for role router 
        Route::get('database', 'Api\RoleController@database_table');
        Route::resource('role', 'Api\RoleController');
        Route::resource('permission', 'Api\PermissionController');

        Route::resource('product', 'Api\ProductController');
        Route::group(['prefix' => 'product'], function () {
            Route::resource('/{product}/reviews', 'Api\ReviewController');
        });
    });
});
