import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo/1.png'
import './Navbar.css'


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav>
            <div className='nav'>
                <div className='nav-head'>
                    <Link className='logo-img' to="/"><img src={Logo} alt='Logo' /></Link>
                    <Link className='logo-p' to="/"><p>WHITEHATIANS</p></Link>
                </div>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='nav-menu'>
                    <ul className={menuOpen ? "open" : ""}>
                        <li><NavLink to="/events">EVENTS</NavLink></li>
                        <li><NavLink to="/office-bearers">OFFICE BEARERS</NavLink></li>
                        <li><NavLink to="/news">BLOG</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/contact-us">CONTACT US</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
