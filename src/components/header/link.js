import React from "react"
import { IconContext } from "react-icons";
import "../../styles/header.css";

function Link({ icon, label, link }) {

    return (
        <div className="link-container">
            <a href={link} className="link">
                <IconContext.Provider value={{ className: "link-icon" }}>
                    {icon}
                </IconContext.Provider>
                <p>{label}</p>
            </a>
        </div>
    )
}

export default Link;
