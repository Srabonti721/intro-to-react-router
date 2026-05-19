import React from 'react';
import { NavLink,} from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>this is a header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;