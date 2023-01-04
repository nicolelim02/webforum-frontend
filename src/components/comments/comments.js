import React, { useEffect, useState } from "react";
import Comment from "./comment";
import "../../styles/comments.css";

function Comments({ isVisible, index }) {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

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

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            const newComment = {
                body: comment,
                parent: null,
                user_id: JSON.parse(localStorage.getItem("user")).id,
                created_at: null
            }
            setComments((prev) => [...prev, newComment]);
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
