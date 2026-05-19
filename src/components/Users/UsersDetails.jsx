import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const user = useLoaderData()
        console.log(user);
        
    return (
        <div className='shared'>
            <h2>{user.name}</h2>
            <p>{user.website}</p>
        </div>
    );
};

export default UsersDetails;