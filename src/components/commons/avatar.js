import React from "react";
import "../../styles/home.css";

function Avatar({ username }) {
    const firstLetter = username.substring(0, 1);
    
    return (
        <div className="avatar-container">{firstLetter}</div>
    )
}

export default Avatar;