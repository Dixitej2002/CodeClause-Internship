
import React from 'react';
import './Section.css'

const Section = ({ title1, content }) => {
  return (
    <section className='box2'>
      <h2>{title1}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
