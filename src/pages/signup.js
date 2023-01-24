import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrow90DegUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../components/commons/logo";
import "../styles/auth.css"

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signUp = (userInfo) => {
        console.log(userInfo);
        const backendUrl = "http://localhost:8000/signup";
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({ user: userInfo })
        };
        
        fetch(backendUrl, init)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    localStorage.setItem("user", JSON.stringify(res.user));
                    localStorage.setItem("token", res.token);
                    navigate("/home");
                }
            })
    }

    return (
        <div className="auth-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="auth-container">
                <h1>Welcome!</h1>
                <form className="auth-form">
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type={"text"} placeholder={"JohnDoe"} value={username} onChange={(event) => setUsername(event.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type={"email"} placeholder={"johnDoe@gmail.com"} value={email} onChange={(event) => setEmail(event.target.value)} />

                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type={"text"} placeholder={"John Doe"} value={name} onChange={(event) => setName(event.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type={"password"} placeholder={"********"} value={password} onChange={(event) => setPassword(event.target.value)} />
                </form>
                <div className="btn-container">
                <button className="auth-btn" onClick={() => signUp({ username: username, email: email, name: name, password: password })}>
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
