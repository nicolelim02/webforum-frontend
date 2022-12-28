import React from "react";
import { IconContext } from "react-icons";
import { BsPlus } from "react-icons/bs";

function CreatePostButton() {
    return (
        <button className="create-post-btn">
            <IconContext.Provider value={{ className: "create-post-icon" }}>
                <BsPlus />
            </IconContext.Provider>
            <p>Create a Post</p>
        </button>
    )
}

export default CreatePostButton;
