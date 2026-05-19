import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const postDetails = () => {
  const post = useLoaderData()
  console.log(post);
  const navigate = useNavigate();


    return (
        <div>
            <h2>post details</h2>
            <h3>{post.body}</h3>
            <button onClick={()=>navigate(-1)}>go back</button>
        </div>
    );
};

export default postDetails;