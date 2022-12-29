import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLogin } from "react-icons/ai";
import Logo from "../components/header/logo";
import "../styles/auth.css"
import "../styles/logo.css";

function SignIn() {
    return (
        <div className="auth-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="auth-container">
                <h1>Welcome Back!</h1>
                <form className="auth-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type={"text"} placeholder={"JohnDoe"} />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type={"password"} placeholder={"********"} />
                </form>
                <div className="btn-container">
                    <button className="auth-btn">
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
