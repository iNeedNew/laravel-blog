<?php

namespace App\Http\Controllers\Post\Comment;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\Comment\Resource;
use App\Models\Comment;
use App\Models\Post;

class DestroyController extends Controller
{
    public function __invoke(Post $post,Comment $comment): Resource
    {
        $comment->delete();
        return new Resource($comment);
    }
}
