import React from 'react';
import './user.css'
import { Link } from 'react-router';
const SingleUser = ({user}) => {
    // console.log(user);
    const {id, name, email, phone} = user
    return (
        <div className='shared'>
            <h1>{name}</h1>
            <h2>email : {email}</h2>
            <p><small>phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show details</Link>
        </div>
    );
};

export default SingleUser;