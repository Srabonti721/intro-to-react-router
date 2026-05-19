import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UsersDetails = () => {
    const user = useLoaderData()
        console.log(user);
        const navigate = useNavigate();
    return (
        <div className='shared'>
            <h2>{user.name}</h2>
            <p>{user.website}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default UsersDetails;