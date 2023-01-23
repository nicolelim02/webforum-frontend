import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import Link from "./link";
import "../../styles/sidebar.css";

function Sidebar() {

    const sidebarItems = [
        { icon: <AiOutlineHome />, label: "home", link: "/home" },
        { icon: <BsFolder2Open />, label: "my post", link: "/my-posts" }
    ]

    return (
        <div className="sidebar-container">
            <h4>MENU</h4>
            <ul className="sidebar-list">
                {sidebarItems.map((item) => <li key={item.label} className="sidebar-item"><Link icon={item.icon} label={item.label} link={item.link}/></li>)}
            </ul>
        </div>
    )
}

export default Sidebar;