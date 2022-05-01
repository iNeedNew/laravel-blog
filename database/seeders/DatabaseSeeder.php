<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Database\Factories\PostTagFactory;
use Database\Factories\PostUserCommentFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(10)->create();
        \App\Models\Tag::factory(10)->create();
        \App\Models\Post::factory(10)->create();
        \App\Models\Comment::factory(40)->create();
        \App\Models\Reaction::factory(40)->create();
        \App\Models\PostTag::factory(20)->create();


    }
}
