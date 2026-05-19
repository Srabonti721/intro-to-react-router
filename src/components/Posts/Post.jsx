import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {

    const navigate = useNavigate();
    const handleDetailsOf = () =>{
        navigate(`/posts/${post.id}`)
    }
    return (
        <div style={{
            border:"2px solid red",
            margin:"10px",
            padding:"10px"
        }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>
            <button>show Details</button></Link>
            <button onClick={handleDetailsOf}>details of: {post.id}</button>
        </div>
    );
};

export default Post;