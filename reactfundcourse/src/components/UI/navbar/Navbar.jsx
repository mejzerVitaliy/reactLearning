import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <span className='linksTo'><Link to="/about">About site</Link></span>
                <span className='linksTo'><Link to="/posts">Posts</Link></span>                
            </div>
        </div>
    )
}

export default Navbar