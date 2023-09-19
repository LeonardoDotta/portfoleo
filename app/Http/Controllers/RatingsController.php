<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Rating;

class RatingsController extends Controller
{

    public function __construct()
    {

    }


    public function getAll(){

        return response()->json(['status'=>'success','data'=>['Teste OK!']]);
        
    }

    public function post(){

        $body = request();
        $rating_data = [
            'name' => $body['name'],
            'rating' => $body['rating']
        ];

        Rating::create($rating_data);

        return response()->json(['status'=>'success','data'=>['Teste OK!']]);
    }

}