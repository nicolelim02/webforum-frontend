import React from "react";
import { AiOutlineHome, AiOutlineSave } from "react-icons/ai";
import { MdOutlineTopic } from "react-icons/md";
import Link from "./link";
import "../../styles/sidebar.css";

function Sidebar() {

    const sidebarItems = [
        { icon: <AiOutlineHome />, label: "home" },
        { icon: <MdOutlineTopic />, label: "topics" },
        { icon: <AiOutlineSave />, label: "saved" }
    ]

    return (
        <div className="sidebar-container">
            <h4>MENU</h4>
            <ul className="sidebar-list">
                {sidebarItems.map((item) => <li key={item.label} className="sidebar-item"><Link icon={item.icon} label={item.label} /></li>)}
            </ul>
        </div>
    )
}

export default Sidebar;