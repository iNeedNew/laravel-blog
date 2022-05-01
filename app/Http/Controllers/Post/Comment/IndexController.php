<?php

namespace App\Http\Controllers\Post\Comment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\Comment\Resource;
use App\Models\Post;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Post $post): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        $comments = $post->comments;
        return Resource::collection($comments);

    }
}
