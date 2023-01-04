import React from "react";
import Post from "./post";
import "../../styles/home.css";

function Posts({ posts }) {

    return (
        <div className="posts">
            {posts.map((post, id) => <Post post={post} key={id} />)}
        </div>
    )
}

export default Posts;
