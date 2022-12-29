import React, { useState } from "react";
import Creatable from "react-select/creatable";
import "../../styles/createpost.css";

function CreatePostForm({ setPosts }) {
    
    const topicOptions = [
        { value: "Academics", label: "Academics" },
        { value: "Food", label: "Food" },
        { value: "Games", label: "Games" },
        { value: "Sports", label: "Sports" },
    ]

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const [topics, setTopics] = useState([]);

    const handleSubmit = () => {
        const topicValues = topics.map(topic => topic.value);
        const newPost = { 
            title: title, 
            content: content, 
            topics: topicValues,
            user: "TestUser",
            time: new Date(Date.now())
        };
        console.log(newPost);
        setPosts((prev) => [...prev, newPost]);
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type={"text"} placeholder="Looking for another player!" className="title-input" value={title} onChange={(event) => setTitle(event.target.value)} />

                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" placeholder="Looking for another player!" className="content-textarea" value={content} onChange={(event) => setContent(event.target.value)} />

                <label htmlFor="topic">Topic</label>
                <Creatable options={topicOptions} isMulti value={topics} onChange={(event) => setTopics(event)} />
            </form>
            <div className="btn">
                <button className="save-btn" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default CreatePostForm;
