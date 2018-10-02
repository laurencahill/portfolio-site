import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

<div className="nav">
<div clasName="logo">
<h3>LAUREN CAHILL</h3>
</div>

<nav className="nav-style">
    <ul>
        <li>
        <NavLink to="/" activeStyle={{fontWeight: 'bold', color: 'blue'}}>HOME</NavLink>
        </li>
        <li>
        <NavLink to="/about" activeStyle={{fontWeight: 'bold', color: 'blue'}}>ABOUT</NavLink>
        </li>
        <li>
        <NavLink to="/projects" activeStyle={{fontWeight: 'bold', color: 'blue'}}>PROJECTS</NavLink>
        </li>
        <li>
        <NavLink to="/contact" activeStyle={{fontWeight: 'bold', color: 'blue'}}>CONTACT</NavLink>
        </li>
    </ul>
</nav>
</div>
  )
}

export default Navbar;