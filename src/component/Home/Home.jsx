import React from 'react'
import resumeview from '../icons/3d.png'
import './Home.css'


const Home = () => {
  return (
    <div className='header'>

        <section className='top-view'>
        <h1>
    Create Your <span className='yel'>Professional Resume</span> <br />
    Easily and Effortlessly <br />
    <span className='color'>Start Your Career Journey Today</span>
</h1>

            <div>
                <img src={resumeview} alt="Resume Illustator" />
            </div>
        </section>
        

    </div>
  )
}

export default Home