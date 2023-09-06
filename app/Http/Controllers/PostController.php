<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;

class PostController extends Controller
{
    public function newPost(Request $request)
    {
        $post=Posts::create([
            'post_title' => $request->post_title,
            'post_category' => $request->post_category,
            'post_thumbnail' => $request->post_thumbnail,
            'post_content' => $request->post_content,

        ]);
    }

    public function formImageUpload(Request $request)
    {
       
       $imageName = time().'.'.$request->file('file-0')->extension();  
     
       $request->file('file-0')->move(public_path('formUploads'), $imageName);
       $result = [
        [
            'url' => '/formUploads/'.$imageName,
            'name' => $imageName,
            'size' => '561276',
        ],
    ];
    return response()->json(['result' => $result],200);

    }
}