
import React from 'react';
import './About.css'; 
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import gmail from '../icons/gmail.png'
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        <h3>Me:-</h3>
            <p>I am Dixit Pradhan.I am a Student. Pursuing MCA at Centurion University in Bhubaneswar Campus.I have skill in Web Devlopment ,Problem Solving ,App Devlopement.</p>
            <div className="social">
                <h3>Connect with Me:-</h3>
                <a href="https://github.com/Dixitej2002"><img src={github} alt="Dixit's github profile" /></a>
                <a href="https://linked.in/dixit-pradhan-amitkumar"><img src={linkedin} alt="Dixit's Linkedin profile" /></a>
                <a href="mailto:sik.amitkumar@gmail.com"><img src={gmail}alt="mail to Dixit" /></a>
            </div>
      </p>
      <h2>Mission:-</h2>
      <p>Our mission is to empower individuals by providing them with the tools and resources they need to create professional resumes easily and efficiently. We strive to simplify the process of resume building, enabling everyone to showcase their skills and experiences effectively.</p>
      <h2>Value:</h2>
      <ol>
        <li>Accessibility: We believe that everyone should have access to quality resume-building tools, regardless of their background or circumstances.</li>
        <li>Simplicity: We are committed to providing simple and straightforward solutions that streamline the resume-building process.</li>
        <li>Empowerment: We empower individuals to take control of their professional journey by equipping them with the resources they need to succeed.</li>
      </ol>
    </div>
    </>
  );
};

export default About;
