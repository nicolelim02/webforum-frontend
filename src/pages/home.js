import React from "react";
import CreatePostButton from "../components/createPostButton";
import Header from "../components/header/header";
import Posts from "../components/post/posts";
import Sidebar from "../components/sidebar/sidebar";
import "../styles/home.css";

function Home() {
    return (
        <div className="home-wrapper">
            <Header />
            <div className="home-container">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="posts-wrapper">
                    <Posts />
                </div>
                <div className="create-post">
                    <CreatePostButton />
                </div>
            </div>
        </div>
    )
}

export default Home;