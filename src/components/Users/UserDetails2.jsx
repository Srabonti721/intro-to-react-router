import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise)
    return (
        <div>
             <h3>{user.name}</h3>
            <p><small>{user.username}</small></p>
        </div>
    );
};

export default UserDetails2;