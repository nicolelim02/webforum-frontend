import React, { useEffect, useState } from "react";
import Logo from "../components/commons/logo"
import EditablePosts from "../components/editpost/editablePosts";
import "../styles/myposts.css";

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    
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
                        const { id, title, content, topics, created_at } = post;
                        return {
                            id: id,
                            title: title,
                            content: content,
                            topics: topics,
                            user_id: userId,
                            created_at: created_at,
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

    const updatePost = (postInfo) => {
        const { id } = postInfo;
        const backendUrl = `http://localhost:8000/posts/${id}`;
        fetch(backendUrl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ post: postInfo })
        })
            .then(() => {
                const updatedPosts = myPosts.map((post) => {
                    if (post.id === id) {
                        return postInfo;
                    } else {
                        return post
                    }
                });
                setMyPosts(updatedPosts);
            });
    }

    return (
        <div className="my-posts">
            <div className="logo">
                <Logo />
            </div>
            <div className="my-posts-container">
                <h2 className="my-posts-header">My Posts</h2>
                <EditablePosts posts={myPosts} deletePost={deletePost} updatePost={updatePost} />
            </div>
        </div>
    )
}

export default MyPosts;
