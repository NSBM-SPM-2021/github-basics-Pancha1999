import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/Navbar.css";

export default function navbar() {
    return (
        <div className="Navbar">
          

            <nav className="navbar">
            <h1>
                The Resturent
            </h1>
<div className="links">

    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
</div>
</nav>

      </div>  
    )
}

