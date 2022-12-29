import React from "react";
import { IconContext } from "react-icons";
import { BsArrow90DegUp } from "react-icons/bs";
import Logo from "../components/header/logo";
import "../styles/auth.css"

function SignUp() {
    return (
        <div className="auth-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="auth-container">
                <h1>Welcome!</h1>
                <form className="auth-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type={"text"} placeholder={"JohnDoe"} />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type={"email"} placeholder={"johnDoe@gmail.com"} />

                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type={"text"} placeholder={"John Doe"} />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type={"password"} placeholder={"********"} />
                </form>
                <div className="btn-container">
                <button className="auth-btn">
                    <IconContext.Provider value={{ className: "signup-icon" }}>
                        <BsArrow90DegUp />
                    </IconContext.Provider>
                    <p>Sign Up</p>
                </button>
            </div>
            </div>
        </div>
    )
}

export default SignUp;
