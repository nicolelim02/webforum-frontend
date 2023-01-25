import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import SearchBar from "./searchBar";
import "../../styles/header.css";
import Logo from "../commons/logo";
import { useNavigate } from "react-router-dom";

function Header({ posts, setFilteredPosts, setIsLoggedIn }) {

    const navigate = useNavigate();

    const logout = () => {
        const id = JSON.parse(localStorage.getItem("user")).id;
        const backendUrl = `http://localhost:8000/logout/${id}`;
        fetch(backendUrl, { method: "DELETE" })
            .then(() => {
                setIsLoggedIn(false);
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