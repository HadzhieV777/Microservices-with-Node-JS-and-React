import React from "react";
import PostCreate from "./PostCreate";
import PostList from './PostList';

const App = () => {
    return <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Current Posts</h1>
        <PostList />
    </div>;
};

export default App;