import React, { useState } from "react";
import logo from '../assets/images/logo.png';

function Navbar(){

    const [isOpen , setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
        <nav id="desktop-nav">
            <img src={logo} className="logo"></img>
            <div>
                <ul className="navbar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="nav-connect">
            <a href="#contact"><button><span>Let's Connect</span></button></a>
            </div>
        </nav>

        <nav id="hamburger-nav">
        <img src={logo} className="logo"></img>
        <div class="hamburger-menu">
            <div 
            className={`hamburger-icon ${isOpen ? 'open' : ''}`}  
            onClick={toggleMenu}
            >
            <span></span>
            <span></span>
            <span></span>
            </div>
            <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <div className="hamburger-btn">
                <a href="#contact">
                <button onClick={toggleMenu}><span>Let's Connect</span></button></a>
                </div>
            </div>
        </div>
        </nav>
        </>
    ); 
}

export default Navbar;