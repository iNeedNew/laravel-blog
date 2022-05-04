<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::group(['middleware' => 'api', 'prefix' => '/auth'], function ($router) {
    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/refresh', 'AuthController@refresh');
    Route::post('/me', 'AuthController@me');


    Route::group(['middleware' => 'auth:api'], function () {


        Route::group(['namespace' => 'Post', 'prefix' => '/posts'], function () {

            Route::get('/', 'IndexController');
            Route::get('/{post}', 'ShowController');

            Route::post('/', 'StoreController');
            Route::patch('/{post}', 'UpdateController');
            Route::delete('/{post}', 'DestroyController');

            Route::group(['namespace' => 'Comment', 'prefix' => '/{post}/comments'], function () {
                Route::get('/', 'IndexController');
                Route::post('/', 'StoreController');
                Route::patch('/{comment}', 'UpdateController');
                Route::delete('/{comment}', 'DestroyController');
            });

            Route::group(['namespace' => 'Reaction', 'prefix' => '/{post}'], function () {
                Route::get('/reactions', 'IndexController');
            });
        });


    });


});


Route::group(['namespace' => 'User', 'prefix' => '/users'], function () {
    Route::post('/', 'StoreController');
});


