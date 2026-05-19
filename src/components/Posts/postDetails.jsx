import React from 'react';
import { useLoaderData } from 'react-router';


const postDetails = () => {
  const post = useLoaderData()
  console.log(post);
  

    return (
        <div>
            <h2>post details</h2>
            <h3>{post.body}</h3>
        </div>
    );
};

export default postDetails;