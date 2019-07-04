import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
           <ul>
            {/* 1. link stops server request  */}
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            {/* 2. navlink do same as link to but it's also gives active class on persent anchor tag in dom */}
             <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>
        </div>
    )
}
export default Navbar;
