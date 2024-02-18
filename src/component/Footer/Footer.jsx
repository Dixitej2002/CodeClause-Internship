import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../icons/Resume.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
         <img src={logo} alt="logo" />

         <p>A resume builder app is a tool that helps you create your resume or CV easily. It typically provides templates and forms where you can input your personal information, education background, work experience, skills, and other relevant details. The app then formats this information into a professional-looking document that you can download or print</p>
        </div>
        <div className="footer__center">
          <h2>Quick Links</h2>
          <ul>
            
            <li><Link to='/about'>About Us</Link></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer__right" id='contact'>
          <h2>Contact Us</h2>
          <p>43  Phulbani, Odisha, India ❤️</p>
          <p>Email: help.edumann@gmail.com</p>
          <p>Phone: +91 8249598827</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Resume Builder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
