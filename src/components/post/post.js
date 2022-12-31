import React from "react";
import { IconContext } from "react-icons";
import { BsChat, BsHeart } from "react-icons/bs";
import "../../styles/home.css";
import Avatar from "../commons/avatar";

function Post({ post }) {

    const { title, content, topics, created_at } = post;
    const username = JSON.parse(localStorage.getItem("user")).username;
    
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

    return (
        <div className="post-container" id="post-">
            <div className="post-header">
                <h3 className="post-title">{title}</h3>
                <ul className="post-topics">
                    {topics.map((topic) => <li key={topic} className="topic-item">{topic}</li>)}
                </ul>
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
                    <button className="post-btn">
                        <IconContext.Provider value={{ className: "post-icon" }}>
                            <BsChat />
                        </IconContext.Provider>
                        <p>Comment</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;
