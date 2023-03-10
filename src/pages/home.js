import React, { useEffect, useState } from "react";
import CreatePostButton from "../components/createpost/createPostButton";
import CreatePostForm from "../components/createpost/createPostForm";
import Modal from "../components/commons/modal";
import Header from "../components/header/header";
import Posts from "../components/post/posts";
import Sidebar from "../components/sidebar/sidebar";
import "../styles/home.css";

function Home({ setIsLoggedIn }) {

    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        const backendUrl = "http://localhost:8000/posts";
        fetch(backendUrl)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    setPosts(res.map(post => {
                        const { id, content, title, topics, user, created_at, updated_at } = post;
                        return { id: id, title: title, content: content, topics: topics, user_id: user.id, username: user.username, created_at: created_at, updated_at: updated_at }
                    }))
                }
            });
    }, [])

    useEffect(() => {
        setIsOpen(false);
        setFilteredPosts(posts);
    }, [posts])

    return (
        <div>
            <div className="home-wrapper">
                <Header posts={posts} setFilteredPosts={setFilteredPosts} setIsLoggedIn={setIsLoggedIn} />
                <div className="home-container padding-2">
                    <div className="sidebar-wrapper">
                        <Sidebar />
                    </div>
                    <div className="posts-wrapper">
                        <Posts posts={filteredPosts} />
                    </div>
                    <div className="create-post">
                        <CreatePostButton setIsOpen={setIsOpen} />
                    </div>
                </div>
            </div>
            <div className="create-post-form">
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Create a Post"}>
                    <CreatePostForm setPosts={setPosts} />
                </Modal>
            </div>
        </div>
    )
}

export default Home;
