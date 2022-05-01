<?php

namespace App\Http\Controllers\Post\Reaction;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\Reaction\Resource;
use App\Models\Post;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Post $post): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        $reactions = $post->reactions;
        return Resource::collection($reactions);
    }
}
