<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class Resource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $tags = [];

        foreach ($this->tags as $tag) {
            $tags[] = ['id' => $tag->id, $tag->title];
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'user' => [
                'id' => $this->user->id,
                'nickname' => $this->user->nickname,
                'first_name' => $this->user->first_name,
                'last_name' => $this->user->last_name,
            ],
            'category' => [
                'id' => $this->category->id,
                'nickname' => $this->category->title,
            ],
            'tags' => [
                $tags
            ],
        ];
    }
}
