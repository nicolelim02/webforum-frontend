import React from "react";
import "../../styles/home.css";
import EditablePost from "./editablePost";

function EditablePosts({ posts, deletePost, updatePost }) {

    return (
        <div className="editable-posts">
            {posts.map((post, id) => <EditablePost post={post} key={id} deletePost={deletePost} updatePost={updatePost} index={id} />)}
        </div>
    )
}

export default EditablePosts;
