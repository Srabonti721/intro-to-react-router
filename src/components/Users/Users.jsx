import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from './SingleUser';

const Users = () => {
    const loadUser = useLoaderData();
    // console.log(loadUser);
    
    return (
        <div>
            <h2>this is users {loadUser.length}</h2>
            <div>
                {
                    loadUser.map(user=><SingleUser key={user.id} user={user}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Users;