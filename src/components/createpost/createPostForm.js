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

    const createPost = (postInfo) => {
        const backendUrl = "http://localhost:8000/posts/new";
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({ post: postInfo })
        }

        fetch(backendUrl, init)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    console.log(res.error);
                }
            })
    }

    const handleSubmit = () => {
        if (title.trim() === "" || content.trim() === "" || topics.length === 0) {
            alert("There are some empty/invalid inputs, please try again");
            return;
        }
        const topicValues = topics.map(topic => topic.value);
        const newPost = { 
            title: title, 
            content: content, 
            topics: topicValues,
            user_id: JSON.parse(localStorage.getItem("user")).id,
            username: JSON.parse(localStorage.getItem("user")).username,
            created_at: null,
            updated_at: null,
        };
        createPost(newPost);
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
