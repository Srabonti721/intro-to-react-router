import React, { Suspense, useState } from 'react';
import './user.css'
import { Link, Navigate, useNavigate } from 'react-router';
import UserDetails2 from './UserDetails2';
const SingleUser = ({user}) => {
    const [showHide, setShowHide] = useState(false);
    const [visit, setVisit] = useState(false)
    // console.log(user);
    const {id, name, email, phone} = user;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/users/${id}`)
    }
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())

    if(visit){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div className='shared'>
            <h1>{name}</h1>
            <h2>email : {email}</h2>
            <p><small>phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={handleDetails}>details of : {id}</button>
            <button onClick={()=>setShowHide(!showHide)}>{showHide?"Hide":"Show"}Details</button>
            {
                showHide && <Suspense fallback={<p>loading...</p>}>
                     <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setVisit(true)}>Visit Home</button>
        </div>
    );
};

export default SingleUser;