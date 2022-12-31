import React, { useEffect, useState } from "react";
import Logo from "../components/commons/logo"
import Posts from "../components/post/posts";
import "../styles/myposts.css";

function MyPosts() {
    const [myPosts, setMyPosts] = useState([])
    
    useEffect(() => {
        const backendUrl = "http://localhost:8000/posts/";

        fetch(backendUrl)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error)
                } else {
                    const userId = JSON.parse(localStorage.getItem("user")).id;
                    const posts = res.filter(post => post.user.id === userId);
                    setMyPosts(posts.map((post) => {
                        const { id, title, content, topics, created_at, updated_at} = post;
                        return {
                            id: id,
                            title: title,
                            content: content,
                            topics: topics,
                            user_id: userId,
                            created_at: created_at,
                            updated_at: updated_at
                        }
                    }))
                }
            })
    }, []);

    const deletePost = (post) => {
        const { id } = post;
        const backendUrl = `http://localhost:8000/posts/${id}`;
        fetch(backendUrl, {
            method: "DELETE"
        })
            .then(() => {
                const updated = myPosts.filter((post) => post.id !== id);
                setMyPosts(updated);
            });
    }

    return (
        <div className="my-posts">
            <div className="logo">
                <Logo />
            </div>
            <div className="my-posts-container">
                <h2 className="my-posts-header">My Posts</h2>
                <Posts posts={myPosts} showButton={true} deletePost={deletePost} />
            </div>
        </div>
    )
}

export default MyPosts;
