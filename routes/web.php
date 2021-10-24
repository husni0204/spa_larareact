<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');
Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::middleware(['auth'])->group(function(){
    Route::resource('/users', UserController::class);

    Route::get('/', function () {
        return Inertia::render('Home');
    })->name('home');
    Route::get('/two-factor-auth', function (Request $request) {
        return Inertia::render('TwoFactorAuth', [
            'qrCode' => $request->user()->two_factor_secret !== NULL ? $request->user()->twoFactorQrCodeSvg() : '',
            'recoveryCode' => $request->user()->two_factor_secret !== NULL ? $request->user()->recoveryCodes() : [],
        ]);
    })->name('twofactorauth');
    Route::get('/profile', function () {
        return Inertia::render('Profile');
    })->name('profile');
});