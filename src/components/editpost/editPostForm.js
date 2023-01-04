import React, { useState } from "react";
import Creatable from "react-select/creatable";

function EditPostForm({ handleUpdate, setIsOpen }) {

    const topicOptions = [
        { value: "Academics", label: "Academics" },
        { value: "Food", label: "Food" },
        { value: "Games", label: "Games" },
        { value: "Sports", label: "Sports" },
    ]

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [topics, setTopics] = useState([]);

    const update = () => {
        handleUpdate({ updatedTitle: title, updatedContent: content, updatedTopics: topics });
        setIsOpen(false);
    }

    return (
        <div className="edit-post-form">
            <form>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" className="title-input" placeholder="Assignment questions" value={title} onChange={(event) => setTitle(event.target.value)} />

                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className="content-textarea" placeholder="Assignment questions" value={content} onChange={(event) => setContent(event.target.value)} />

                <label htmlFor="topics">Topics</label>
                <Creatable options={topicOptions} isMulti value={topics} onChange={(event) => setTopics(event)} />
            </form>
            <div className="btn">
                <button className="save-btn" onClick={update}>Save</button>
            </div>
        </div>
    )
}

export default EditPostForm;
