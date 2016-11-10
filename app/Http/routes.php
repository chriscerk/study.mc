<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/{any?}', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/studymc/{any?}', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/studymc/course/{any?}/topics', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/studymc/topic/{any?}/learn', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/studymc/topic/{any?}/test', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/studymc/topic/{any?}/review', [
    'uses' => 'Angular\AngularRoutesController@index',
    'as' => 'home'
]);
