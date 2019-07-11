import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>{
    //console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);
    return (
        <div>
           <ul>
            {/* 1. link to stops browser reload on navigation link*/}
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            {/* 2. navlink do same as link to but it's also gives active class on persent anchor tag in dom */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>
        </div>
    )
}
export default withRouter(Navbar);
