import React, { useEffect, useState } from "react";
import CreatePostButton from "../components/createpost/createPostButton";
import CreatePostForm from "../components/createpost/createPostForm";
import Modal from "../components/createpost/modal";
import Header from "../components/header/header";
import Posts from "../components/post/posts";
import Sidebar from "../components/sidebar/sidebar";
import { samplePosts } from "../data/sampleData";
import "../styles/home.css";

function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState(samplePosts)
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        setIsOpen(false);
        setFilteredPosts(posts);
    }, [posts])

    return (
        <div>
            <div className="home-wrapper">
                <Header posts={posts} setFilteredPosts={setFilteredPosts} />
                <div className="home-container">
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