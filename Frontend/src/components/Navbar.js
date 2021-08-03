import React from 'react'
import logo from '../assets/logo1.jpg';
import {Link} from 'react-router-dom';
import "../Styles/Navbar.css";

export default function navbar() {
    return (
        <div className="Navbar">
            <div className="leftside">
                <img src={logo}/>
            </div>
            <div className="rightside">
                <Link to ='/'>Home</Link>
                <Link to ='/menu'>Menu</Link>
                <Link to ='/about'>about</Link>
                <Link to ='/contact'>Contact</Link>
            </div>
            
        </div>
    )
}
