import React from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import SearchBar from "./searchBar";
import "../../styles/header.css";
import Link from "./link";
import Logo from "../commons/logo";

function Header({ posts, setFilteredPosts}) {
    return (
        <div className="header-container">
            <div className="header-title">
                <Logo />
            </div>
            <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
            <div className="links">
                <Link icon={<AiOutlineUser />} label="Profile" link={"/"}/>
                <Link icon={<AiOutlineLogout />} label="Logout" link={"/"} />
                <Link icon={<BsFolder2Open />} label="My Posts" link={"/my-posts"} />
            </div>  
            
        </div>
    )
}

export default Header;