import React from "react";
import { IconContext } from "react-icons";
import "../../styles/sidebar.css";

function Link({icon, label, link}) {
    return (
        <div className="sidebar-link-container">
            <a href={link} className="sidebar-link">
                <IconContext.Provider value={{ className: "sidebar-icon" }}>
                    {icon}
                </IconContext.Provider>
                <p>{label.toUpperCase()}</p>
            </a>
        </div>
    )
}

export default Link;
