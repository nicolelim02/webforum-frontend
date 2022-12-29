import React from "react";
import { IconContext } from "react-icons";
import { BsPlus } from "react-icons/bs";

function CreatePostButton({ setIsOpen }) {

    return (
        <button className="create-post-btn" onClick={() => setIsOpen(true)}>
            <IconContext.Provider value={{ className: "create-post-icon" }}>
                <BsPlus />
            </IconContext.Provider>
            <p>Create a Post</p>
        </button>
    )
}

export default CreatePostButton;
