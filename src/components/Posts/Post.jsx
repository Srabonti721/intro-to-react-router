import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    return (
        <div style={{
            border:"2px solid red",
            margin:"10px",
            padding:"10px"
        }}>
            <h2>{post.title}</h2>
            <p>{post.id}</p>
            <Link to={`/posts/${post.id}`}>show Details</Link>
        </div>
    );
};

export default Post;