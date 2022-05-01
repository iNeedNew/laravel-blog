<?php

namespace App\Http\Resources\Post\Reaction;

use Illuminate\Http\Resources\Json\JsonResource;

class Resource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'value' => $this->value,
            'user' => [
                'id' => $this->user->id,
                'nickname' => $this->user->nickname,
                'first_name' => $this->user->first_name,
                'last_name' => $this->user->last_name,
            ],
        ];
    }
}
