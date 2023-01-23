import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import SearchBar from "./searchBar";
import "../../styles/header.css";
import Link from "./link";
import Logo from "../commons/logo";
import { useNavigate } from "react-router-dom";

function Header({ posts, setFilteredPosts}) {

    const navigate = useNavigate();

    const logout = () => {
        const backendUrl = "http://localhost:8000/logout";
        fetch(backendUrl, { method: "DELETE" })
            .then(() => {
            navigate("/")
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="header-container">
            <div className="header-title">
                <Logo />
            </div>
            <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
            <div className="logout">
                <button className="logout-btn" onClick={logout}>
                <AiOutlineLogout />
                <p className="logout-name">Logout</p>
            </button>
            </div>
            
        </div>
    )
}

export default Header;