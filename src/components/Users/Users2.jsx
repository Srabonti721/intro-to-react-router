import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise)
    // console.log("users 3",users);
    
    return (
        <div>
            <h1>Users3 data </h1>
        </div>
    );
};

export default Users2;