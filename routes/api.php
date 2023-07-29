<?php

use App\Http\Controllers\Api\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('goals', App\Http\Controllers\Api\GoalController::class);
Route::apiResource('users', UserController::class);
Route::get('test/{id}', [UserController::class, 'getRoles']);
Route::apiResource('roles', \App\Http\Controllers\Api\RolesController::class);
