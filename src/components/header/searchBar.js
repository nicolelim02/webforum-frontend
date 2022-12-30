import React, { useEffect, useState } from "react";

function SearchBar({ posts, setFilteredPosts }) {

    const [input, setInput] = useState("");

    useEffect(() => {
        if (input.length > 0) {
            setFilteredPosts(posts.filter((post) => post.title.toLowerCase().includes(input.toLowerCase())));
        } else {
            setFilteredPosts(posts);
        }
    }, [input, posts, setFilteredPosts])

    const search = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className="search-bar-container">
            <input type={"text"} placeholder="🔍 Search For Posts" className="search-bar" value={input} onChange={search} />
        </div>
    )
}

export default SearchBar;
