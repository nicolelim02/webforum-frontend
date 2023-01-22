import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsChat, BsHeart } from "react-icons/bs";
import "../../styles/home.css";
import Comments from "../comments/comments";
import Avatar from "../commons/avatar";
import Modal from "../commons/modal";
import EditPostForm from "../editpost/editPostForm";

function Post({ post, deletePost, updatePost, isEditable }) {

    const [isVisible, setIsVisible] = useState(false); // show/hide comments
    const { title, content, topics, created_at, id } = post;
    const username = JSON.parse(localStorage.getItem("user")).username;

    const [isOpen, setIsOpen] = useState(false);
    
    const getTimeDifference = (currentTime) => {
        const now = Date.now();
        const start = new Date(currentTime).getTime()
        const diff = (now - start) / 1000; // in seconds

        const oneMinute = 60;
        const oneHour = oneMinute ** 2;
        const oneDay = oneHour * 24;
        const oneWeek = oneDay * 7;
        const oneMonth = oneWeek * 30;
        const oneYear = oneDay * 365; 

        if (diff < oneMinute) {
            return "Just posted";
        } else if (diff < oneHour) {
            const duration = Math.floor(diff / oneMinute)
            return duration > 1 
                ? `${duration} minutes ago` 
                : `${duration} minute ago`;
        } else if (diff < oneDay) {
            const duration = Math.floor(diff / oneHour);
            return duration > 1 
                ? `${duration} hours ago`
                : `${duration} hour ago`;
        } else if (diff < oneWeek) {
            const duration = Math.floor(diff / oneDay);
            return duration > 1
                ? `${duration} days ago`
                : `${duration} day ago`;
        } else if (diff < oneMonth) {
            const duration = Math.floor(diff / oneWeek);
            return duration > 1
                ? `${duration} weeks ago`
                : `${duration} week ago`;
        } else if (diff < oneYear) {
            const duration = Math.floor(diff / oneMonth);
            return duration > 1
                ? `${duration} months ago`
                : `${duration} month ago`;
        } else {
            const duration = Math.floor(diff / oneYear);
            return duration > 1
                ? `${duration} years ago`
                : `${duration} year ago`;
        }
    }

    const handleUpdate = (postInfo) => {
        const { updatedTitle, updatedContent, updatedTopics } = postInfo;
        const updatedPost = {
            title: updatedTitle.trim().length > 0 ? updatedTitle : title,
            content: updatedContent.trim().length > 0 ? updatedContent : content,
            topics: updatedTopics.length > 0 ? updatedTopics.map((updatedTopic) => updatedTopic.value) : topics,
            id: id,
            user_id: post.user_id,
            created_at: created_at
        }
        updatePost(updatedPost);
    }

    return (
        <div className="post">
            <div className="post-container" id={`post-${id}`}>
                <div className="post-header">
                    <h3 className="post-title">{title}</h3>
                    <ul className="post-topics">
                        {topics?.map((topic) => <li key={topic} className="topic-item">{topic}</li>)}
                    </ul>
                    {isEditable && 
                    <div className="btn-group">
                        <button onClick={() => setIsOpen(true)}>
                            <IconContext.Provider value={{ className: "btn-group-icon" }}>
                                <AiOutlineEdit />
                            </IconContext.Provider>
                        </button>
                        <button onClick={() => deletePost(post)}>
                            <IconContext.Provider value={{ className: "btn-group-icon" }}>
                                <AiOutlineDelete />
                            </IconContext.Provider>
                        </button>
                    </div>}
                </div>
                <div className="post-content">{content}</div>
                <div className="post-footer">
                    <div className="post-user">
                        <Avatar username={username} />
                        <div className="post-time">{getTimeDifference(created_at)}</div>
                    </div>
                    <div className="post-btns">
                        <button className="post-btn">
                            <IconContext.Provider value={{ className: "post-icon" }}>
                                <BsHeart />
                            </IconContext.Provider>
                            <p>Like</p>
                        </button>
                        <button className="post-btn" onClick={() => setIsVisible(!isVisible)}>
                            <IconContext.Provider value={{ className: "post-icon" }}>
                                <BsChat />
                            </IconContext.Provider>
                            <p>Comment</p>
                        </button>
                    </div>
                </div>
            </div>
            <Comments isVisible={isVisible} index={id} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Edit a Post"} index={id}>
                <EditPostForm handleUpdate={handleUpdate} setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default Post;
