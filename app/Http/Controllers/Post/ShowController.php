<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\Resource;
use App\Models\Post;
use Illuminate\Http\Request;

class ShowController extends Controller
{

    public function __invoke(Post $post): Resource
    {
        return new Resource($post);
    }

}
