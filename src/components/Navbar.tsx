import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Corrected import
import { useState } from 'react';
import "../app/style/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-brand'>Sumaira Shakeel</div>
        {/* large screen navbar links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : " "}`}>
          <li className='navbar-links'><a href="#hero">Home</a></li>
          <li className='navbar-links'><a href="#about">About</a></li>
          <li className='navbar-links'><a href="#projects">Projects</a></li>
          <li className='navbar-links'><a href="#skills">Skills</a></li>
          <li className='navbar-links'><a href="#contact">Contact</a></li>
        </ul>
        {/* hamberger menu icons */}
        <div className='navbar-menu-icons' onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {/* mobile and dropdown */}

      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? "open" : " "}`}>
          <li className='navbar-link'>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className='navbar-link'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='navbar-link'>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className='navbar-link'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='navbar-link'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar;