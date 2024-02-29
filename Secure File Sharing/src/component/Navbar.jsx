import React from 'react';
import './Navbar.css'
import bg from './icons/bg2.jpg'
import logo from './icons/Logo.png'
import fsd from './icons/file-sharing.webp'

const Navbar = () => {
    
  return (
    <div>
        <nav>
            <div className="logo">
                <img src={logo} alt="Share File" />
            </div>
            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
        <section className='backgroundImg'>
            <img src={bg} alt="background" />
        </section>
        <div className='title'>
            <h1><span className='sp1'>Explore</span> the World's Best <span className='sp2'>Secure File  Sharing </span>Platform!</h1>
            <img src={fsd} alt="" />
        </div>
    </div>
  )
}

export default Navbar