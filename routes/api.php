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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

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
