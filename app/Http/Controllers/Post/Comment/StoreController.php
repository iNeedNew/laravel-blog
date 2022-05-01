<?php

namespace App\Http\Controllers\Post\Comment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\Comment\StoreRequest;
use App\Http\Resources\Post\Comment\Resource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;


class StoreController extends Controller
{
    public function __invoke(StoreRequest $request, Post $post, Comment $comment)
    {
        $data = $request->validated();

        //TODO JWT
        $data['user_id'] = User::all()->random()->id;
        $data['post_id'] = $post->id;
        $comment = Comment::create($data);

        return new Resource($comment);

    }
}
