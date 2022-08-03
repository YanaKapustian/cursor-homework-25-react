import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <div className='container'>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="cursor-homework-25-react/homepage">Home page</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="cursor-homework-25-react/twitter">Twitter</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="cursor-homework-25-react/instagram">Instagram</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="cursor-homework-25-react/contacts">Contacts</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;