import React from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import SearchBar from "./searchBar";
import "../../styles/header.css";
import { IconContext } from "react-icons";
import Link from "./link";

function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <IconContext.Provider value={{ className: "header-title-icon" }}>
                    <MdForum />
                </IconContext.Provider>
                <h2>NUSforum</h2>
            </div>
            <SearchBar />
            <div className="links">
                <Link icon={<AiOutlineUser />} label="Profile" />
                <Link icon={<AiOutlineLogout />} label="Logout" />
            </div>
            
        </div>
    )
}

export default Header;