import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Logo from "../components/commons/logo";
import "../styles/auth.css"
import "../styles/logo.css";

function SignIn({ setIsLoggedIn }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = (userInfo) => {
        const backendUrl = "http://localhost:8000/login";
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({ session: userInfo })
        };
        
        fetch(backendUrl, init)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error)
                } else {
                    localStorage.setItem("user", JSON.stringify(res.user));
                    localStorage.setItem("token", res.jwt);
                    navigate("/home");
                    setIsLoggedIn(true);
                }
            })
    }

    return (
        <div className="auth-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="auth-container">
                <h1>Welcome Back!</h1>
                <form className="auth-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type={"text"} placeholder={"JohnDoe"} value={username} onChange={(event) => setUsername(event.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type={"password"} placeholder={"********"} value={password} onChange={(event) => setPassword(event.target.value)} />
                </form>
                <div className="btn-container">
                    <button className="auth-btn" onClick={() => signIn({ username: username, password: password })}>
                        <IconContext.Provider value={{ className: "login-btn" }}>
                            <AiOutlineLogin />
                        </IconContext.Provider>
                        <p>Sign In</p>
                    </button>
                </div>
            </div>
            <div className="sign-up-option">
                <p>Don't have an account? <a href="/signup" className="sign-up-link">Sign up for free now!</a></p>   
            </div>
        </div>
    )
}

export default SignIn;
