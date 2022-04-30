<?php

namespace App\Http\Controllers;

use function view;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('index');
    }
}
