import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import CreatePostBtn from '../button/CreatePostBtn';
import { AuthContext } from '../../../context';


const Navbar = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <CreatePostBtn onClick = {logOut}>Log out</CreatePostBtn>
            
            <div className='navbar__links'>
                <span className='linksTo'><Link to="/about">About site</Link></span>
                <span className='linksTo'><Link to="/posts">Posts</Link></span>                
            </div>
        </div>
    )
}

export default Navbar