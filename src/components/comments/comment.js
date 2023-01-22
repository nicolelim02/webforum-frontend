import React from "react";
import Avatar from "../commons/avatar";
import "../../styles/comments.css";

function Comment({ comment }) {
    const username = JSON.parse(localStorage.getItem("user")).username;

    return (
        <div className="comment">
            <div className="comment-avatar">
                <Avatar username={username} />
            </div>
            <div className="comment-container">
                <div className="comment-header">{username}</div>
                <div className="comment-body">{comment.content}</div>
            </div>
        </div>
    )
}

export default Comment;
