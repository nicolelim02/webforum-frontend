import React from "react";
import Post from "./post";
import "../../styles/home.css";

function Posts({ posts, deletePost=() => alert("Unable to delete!"), updatePost=()=>alert("Unable to edit!"), isEditable=false }) {

    return (
        <div className="posts">
            {posts.map((post, id) => <Post post={post} key={id} deletePost={deletePost} updatePost={updatePost} isEditable={isEditable} />)}
        </div>
    )
}

export default Posts;
