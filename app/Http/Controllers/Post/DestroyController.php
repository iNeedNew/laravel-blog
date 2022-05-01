<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\Resource;
use App\Models\Post;
use Illuminate\Http\Request;

class DestroyController extends Controller
{
    public function __invoke(Post $post)
    {
        $post->delete();
        return new Resource($post);
    }
}
