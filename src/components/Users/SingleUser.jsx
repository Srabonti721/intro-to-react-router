import React from 'react';
import './user.css'
import { Link, useNavigate } from 'react-router';
const SingleUser = ({user}) => {
    // console.log(user);
    const {id, name, email, phone} = user;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/users/${id}`)
    }
    return (
        <div className='shared'>
            <h1>{name}</h1>
            <h2>email : {email}</h2>
            <p><small>phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={handleDetails}>details of : {id}</button>
        </div>
    );
};

export default SingleUser;