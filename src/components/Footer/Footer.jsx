import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <p><small>thank you for visiting our website</small></p>
            <a href='/youtube'>Youtube</a>
            <a href='/fb'>facebook</a>
            <a href='/github'>github</a>
        </div>
    );
};

export default Footer;