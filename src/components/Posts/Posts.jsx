import React, { use } from 'react';
import Post from './Post';

const Posts = ({postPromise}) => {
    const  posts = use(postPromise)
    return (
        <div>
            <h2>post data{posts.length}</h2>
            <div>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;