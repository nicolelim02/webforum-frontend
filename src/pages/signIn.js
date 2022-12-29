import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLogin } from "react-icons/ai";
import Logo from "../components/header/logo";
import "../styles/signin.css"
import "../styles/logo.css";

function SignIn() {
    return (
        <div className="sign-in-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="sign-in-container">
                <h1>Welcome Back!</h1>
                <form className="sign-in-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type={"text"} placeholder={"JohnDoe"} />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type={"password"} placeholder={"********"} />
                </form>
                <div className="btn-container">
                    <button className="sign-in-btn">
                        <IconContext.Provider value={{ className: "login-btn" }}>
                            <AiOutlineLogin />
                        </IconContext.Provider>
                        <p>Sign In</p>
                    </button>
                </div>
            </div>
            <div className="sign-up-option">
                <p>Don't have an account? <a href="/" className="sign-up-link">Sign up for free now!</a></p>   
            </div>
        </div>
    )
}

export default SignIn;
