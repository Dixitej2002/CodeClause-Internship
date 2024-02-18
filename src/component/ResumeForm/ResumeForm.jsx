import React, { useState } from 'react';
import pdfdownload from 'html2pdf.js';
import './Resume.css';
import pdficon from '../icons/pdf.png'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

function ResumeEditor() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    objective: '',
    socialMedia: {
      linkedin: '',
      github: '',
    },
    education: [{
      institution: '',
      degree: '',
      graduationYear: '',
    }],
    experience: [{
      designation: '',
      company: '',
      duration: '',
      location: '',
    }],
    projects: [{
      projectname: '',
      technology: '',
      month: '',
      description: '',
    }],
    skills: [],
  });


  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    if (section === 'education' || section === 'experience' || section === 'projects') {
      const updatedData = [...resumeData[section]];
      updatedData[index][name] = value;
      setResumeData(prevData => ({
        ...prevData,
        [section]: updatedData
      }));
    } else if (section === 'socialMedia') {
      setResumeData(prevData => ({
        ...prevData,
        socialMedia: {
          ...prevData.socialMedia,
          [name]: value
        }
      }));
    } else if (section === 'skills') {

      const skillsArray = value.split('\n').filter(skill => skill.trim() !== '');
      setResumeData(prevData => ({
        ...prevData,
        [name]: skillsArray
      }));
    }
    else {
      setResumeData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const addSection = (section) => {
    setResumeData(prevData => ({
      ...prevData,
      [section]: [...prevData[section], {}]
    }));
  };

  const removeSection = (index, section) => {
    const updatedData = [...resumeData[section]];
    updatedData.splice(index, 1);
    setResumeData(prevData => ({
      ...prevData,
      [section]: updatedData
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Resume Data:", resumeData);
  };
  const handleDownload = () => {
    const element = document.getElementById('resume-preview');

    pdfdownload(element);
  };

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <div className="ResumeEditor">
        <form onSubmit={ handleSubmit }>
          <label>Name:</label>
          <input type="text" name="name" value={ resumeData.name } onChange={ (e) => handleChange(e) } required />

          <label>Email:</label>
          <input type="email" name="email" value={ resumeData.email } onChange={ (e) => handleChange(e) } required />

          <label>Objective:</label>
          <textarea name="objective" value={ resumeData.objective } onChange={ (e) => handleChange(e) } required />
          <label>Mobile No:</label>
          <input type="tel" name='mobile' value={ resumeData.mobile } onChange={ (e) => handleChange(e) } required placeholder='+91 XXXXXXXXXX' />
          <label>Address:</label>
          <input type='text' name="address" value={ resumeData.address } onChange={ (e) => handleChange(e) } required />

          <label>LinkedIn:</label>
          <input type="url" name="linkedin" value={ resumeData.socialMedia.linkedin } onChange={ (e) => handleChange(e, null, 'socialMedia') } />

          <label>Github:</label>
          <input type="url" name="github" value={ resumeData.socialMedia.github } onChange={ (e) => handleChange(e, null, 'socialMedia') } />

          <h3>Education</h3>
          { resumeData.education.map((edu, index) => (
            <div key={ index }>
              <label>Institution:</label>
              <input type="text" name="institution" value={ edu.institution } onChange={ (e) => handleChange(e, index, 'education') } required />
              <label>Degree:</label>
              <input type="text" name="degree" value={ edu.degree } onChange={ (e) => handleChange(e, index, 'education') } required />
              <label>Graduation Year:</label>
              <input type="number" min="1999" max="2050" name="graduationYear" value={ edu.graduationYear } onChange={ (e) => handleChange(e, index, 'education') } required />
              { index > 0 && <button type="button" onClick={ () => removeSection(index, 'education') }>Remove</button> }
            </div>
          )) }
          <button type="button" onClick={ () => addSection('education') }>Add Education</button>

          <h3>Experience</h3>
          { resumeData.experience.map((exp, index) => (
            <div key={ index }>
              <label>Title:</label>
              <input type="text" name="designation" value={ exp.designation } onChange={ (e) => handleChange(e, index, 'experience') } required />
              <label>Company/Organization:</label>
              <input type="text" name="company" value={ exp.company } onChange={ (e) => handleChange(e, index, 'experience') } required />
              <label>Duration:(months)</label>
              <input type="number" min='0' max='40' name="duration" value={ exp.duration } onChange={ (e) => handleChange(e, index, 'experience') } required />
              <label>Location:</label>
              <input type="text" name="location" value={ exp.location } onChange={ (e) => handleChange(e, index, 'experience') } required />
              { index > 0 && <button type="button" onClick={ () => removeSection(index, 'experience') }>Remove</button> }
            </div>
          )) }
          <button type="button" onClick={ () => addSection('experience') }>Add Experience</button>

          <h3>Projects</h3>
          { resumeData.projects.map((proj, index) => (
            <div key={ index }>
              <label>Project Title:</label>
              <input type="text" name="projectname" value={ proj.projectname } onChange={ (e) => handleChange(e, index, 'projects') } required placeholder="e.g., Calculator" />
              <label>Technology Used:</label>
              <input type="text" name="technology" value={ proj.technology } onChange={ (e) => handleChange(e, index, 'projects') } required placeholder="e.g., HTML, Python" />
              <label>Month:</label>
              <input type="month" name="month" value={ proj.month } onChange={ (e) => handleChange(e, index, 'projects') } required />
              <label>Description:</label>
              <textarea name="description" value={ proj.description } onChange={ (e) => handleChange(e, index, 'projects') } required />
              { index > 0 && <button type="button" onClick={ () => removeSection(index, 'projects') }>Remove</button> }
            </div>
          )) }
          <button type="button" onClick={ () => addSection('projects') }>Add Project</button>

          <label>Skills:</label>
          <textarea name="skills" value={ resumeData.skills.join('\n') } onChange={ (e) => handleChange(e, null, 'skills') } required />


          <button type="submit">Preview Resume</button>
        </form>

        <div className="ResumePreview" id='resume-preview'>

          <div className="resume-section">

            <p id='name'>{ resumeData.name || 'your name' }</p>
            <p id='address'>{ resumeData.address || 'your address goes here' }</p>
            <div className="contact-control">
              <p id='mobile'>{ resumeData.mobile || 'mobile' }</p>
              <p id='email'>{ resumeData.email || 'email' }</p>
              <p id='sociallink'>{ resumeData.socialMedia.linkedin || 'linkedin' }</p>
              <p id='sociallink'>{ resumeData.socialMedia.github || 'github' }</p>
            </div>
            <div className="objective">
              <h3>Objective</h3>
              <div className='hor-line'></div>
              <p id='objective'>{ resumeData.objective || 'Add your objective here' }</p>
            </div>
            <h3>Education</h3>
            <div className='hor-line'></div>
            <div className="education">
              { resumeData.education.map((edu, index) => (
                <>
                  <div key={ index }>
                    <div className="edu-margin">
                      <p id='institution'>{ edu.institution || 'XYZ University' }</p>
                      <p id='graduation-year'>{ edu.graduationYear || '2024' }</p>

                    </div>
                    <p id='course'>{ edu.degree || 'Master of Science.' }</p>
                  </div>
                </>
              )) }
            </div>
            <h3>Work Experience</h3>
            <div className='hor-line'></div>
            <div className="experience">
              { resumeData.experience.map((exp, index) => (
                <>
                  <div key={ index }>
                    <div className="exp-margin">
                      <p id='designation'>{ exp.designation || 'Project manager' }</p>
                      <p id='month'>{ exp.duration || '2' } Month</p>
                    </div>
                    <div className="exp2-margin">

                      <p id='organisation'>{ exp.company || 'JP Morgan' }-</p>
                      <p id='location'>{ exp.location || 'Red Heart, New York' }</p>
                    </div>
                    <div className='hor-line2'></div>
                  </div>
                </>
              )) }
            </div>
            <h3>Projects</h3>
            <div className="hor-line"></div>
            <div className="projects">
              { resumeData.projects.map((proj, index) => (
                <>
                  <div key={ index }>
                    <div className="proj-bar">
                      <p id='projectname'>{ proj.projectname || 'Project name' }</p>
                      <p id='technology'>| { proj.technology || 'Python, Flask, Ruby' }</p>
                      <p id='month'>{ proj.month || '2' } </p>

                    </div>
                    <ul type='none'>
                      <li id='description'>
                        { proj.description || 'Describe the project in detail. Include information about its purpose, functionality, technologies used, and any challenges overcome. Feel free to provide links to relevant repositories or demos if available. Be concise but informative.' }
                      </li>
                    </ul>
                    <div className='hor-line2'></div>
                  </div>
                </>
              )) }
            </div>
            <h3>Skills</h3>
            <div className="hor-line"></div>
            <div className="skill">
              <p id='skills'>{ resumeData.skills || 'List your skills and proficiencies relevant to the positions you are targeting. Include both technical skills (e.g., programming languages, software tools) and soft skills (e.g., communication, teamwork). Feel free to organize your skills into categories or provide a bulleted list for clarity.' }</p>
            </div>

          </div>

        </div>
        <div className='dwn'>

          <button onClick={ handleDownload }><img src={ pdficon } alt="pdf download" /></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResumeEditor;
