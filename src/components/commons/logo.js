import React from "react";
import { IconContext } from "react-icons";
import { MdForum } from "react-icons/md";

function Logo() {
    
    return (
        <div className="logo-container">
            <IconContext.Provider value={{ className: "logo-icon" }}>
                <MdForum />
            </IconContext.Provider>
            <h2 className="logo-name">NUSforum</h2>
        </div>
    )
}

export default Logo;