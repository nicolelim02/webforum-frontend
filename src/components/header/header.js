import React from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import SearchBar from "./searchBar";
import "../../styles/header.css";
import Link from "./link";
import Logo from "./logo";

function Header({ posts, setFilteredPosts}) {
    return (
        <div className="header-container">
            <div className="header-title">
                <Logo />
            </div>
            <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
            <div className="links">
                <Link icon={<AiOutlineUser />} label="Profile" />
                <Link icon={<AiOutlineLogout />} label="Logout" />
            </div>  
            
        </div>
    )
}

export default Header;