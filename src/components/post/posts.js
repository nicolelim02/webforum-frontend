import React from "react";
import Post from "./post";
import "../../styles/home.css";

function Posts({ posts, showButton, deletePost }) {

    return (
        <div className="posts">
            {posts.map((post, id) => <Post post={post} key={id} showButton={showButton} deletePost={deletePost} />)}
        </div>
    )
}

export default Posts;
