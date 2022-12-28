import React from "react";
import Post from "./post";
import "../../styles/home.css";

function Posts() {
    const samplePost = { 
        title: "Lorem Ipsum", 
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["Lorem Ipsum", "Sample post"],
        user: "John Doe",
        time: new Date(2022, 11, 15, 15, 43, 50)
    }

    return (
        <div className="posts">
            <Post post={samplePost} />
        </div>
    )
}

export default Posts;
