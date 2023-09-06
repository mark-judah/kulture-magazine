<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable=[
        'post_title',
        'post_category',
        'post_thumbnail',
        'post_content'
    ];
}
