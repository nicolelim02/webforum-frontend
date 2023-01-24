import React, { useEffect, useState } from "react";
import Comment from "./comment";
import "../../styles/comments.css";

function Comments({ isVisible, index }) {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const backendUrl = "http://localhost:8000/comments";
        fetch(backendUrl)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    const filteredComments = res.filter(c => c.post.id === index)
                        .map(c => {
                            const user_id = c.user.id;
                            const post_id = c.post.id;
                            const content = c.content;
                            const username = c.user.username;
                            return { post_id: post_id, user_id: user_id, content: content, username: username }
                        });
                    setComments(filteredComments);
                }
            })
    }, [index])

    useEffect(() => {
        const commentSection = document.getElementById(`comments-${index}`);

        if (isVisible) {
            commentSection.classList.remove("hide");
            commentSection.classList.add("show");
        } else {
            commentSection.classList.remove("show");
            commentSection.classList.add("hide");
        }
    }, [isVisible, index])

    const addComment = (newComment) => {
        const backendUrl = "http://localhost:8000/comments";
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({ comment: newComment })
        };
        fetch(backendUrl, init)
            .then((res) => res.json());
    }

    const handleEnter = (event) => {
        if (event.key === "Enter" & comment.trim() !== "") {
            const newComment = {
                post_id: index,
                user_id: JSON.parse(localStorage.getItem("user")).id,
                content: comment,
                username: JSON.parse(localStorage.getItem("user")).username
            }
            setComments((prev) => [...prev, newComment]);
            addComment(newComment);
            setComment("");
        }
    }

    return (
        <div className="comments hide" id={`comments-${index}`}>
            <div className="comments-header">
                <label htmlFor="comment-input" className="comments-label" />
                <input id="comment-input" name="comment-input" placeholder="Nice post! 👍" onKeyDown={handleEnter} value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            
            <div className="comments-container">
                {comments.map((comment, id) => <Comment comment={comment} key={id} />)}
            </div>
        </div>
    )
}

export default Comments;
