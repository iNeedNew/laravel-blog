<?php

namespace App\Http\Controllers\Post\Comment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\Comment\UpdateRequest;
use App\Http\Resources\Post\Comment\Resource;
use App\Models\Comment;
use App\Models\Post;


class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Post $post, Comment $comment)
    {
        $data = $request->validated();

        $comment->update($data);
        return new Resource($comment);

    }
}
