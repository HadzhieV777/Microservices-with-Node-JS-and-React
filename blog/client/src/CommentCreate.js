import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Add Comment</label>
                <input
                    className="form-control"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>;
};

export default CommentCreate;