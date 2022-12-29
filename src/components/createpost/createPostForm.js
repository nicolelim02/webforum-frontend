import React from "react";
import Creatable from "react-select/creatable";
import "../../styles/createpost.css";

function CreatePostForm() {
    const topicOptions = [
        { value: "Academics", label: "Academics" },
        { value: "Food", label: "Food" },
        { value: "Games", label: "Games" },
        { value: "Sports", label: "Sports" },
    ]

    return (
        <form>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type={"text"} placeholder="Looking for another player!" className="title-input"/>

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" placeholder="Looking for another player!" className="content-textarea" />

            <label htmlFor="topic">Topic</label>
            <Creatable options={topicOptions} isMulti />
        </form>
    )
}

export default CreatePostForm;
