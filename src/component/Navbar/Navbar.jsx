// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../icons/Resume.png';

function Navbar() {
  
  const [showMenu, setShowMenu] = useState(false);

  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to='/'> <img src={logo} alt="logo" /></Link>
      </div>
      
      <div className="navbar__toggle" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      
      <ul className={`navbar__menu ${showMenu ? 'show' : ''}`}>
        <li className="navbar__item">
          <Link to='/' className="navbar__link" id='home'>Home</Link>
        </li>
       
        <li className="navbar__item">
          <Link to='/about' className="navbar__link">About</Link>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
