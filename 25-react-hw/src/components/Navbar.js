import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <div className='container'>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/">Home page</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/twitter">Twitter</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/instagram">Instagram</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link active" : "link")} to="/contacts">Contacts</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;