
import React from 'react';
import Section from './Section';
import './Features.css'

const Features= () => {
  return (
    <div className="features">
     
     <main className="grid-container">
        <Section className='know-thing'
          title1="No Limits"
          content="Share files of any size without worrying about limits or restrictions. Whether it's a small document or a large multimedia file, our platform can handle it all."
        />
        <Section className='know-thing'
          title1="Free of Cost"
          content="Enjoy the convenience of our file sharing service without any subscription fees or hidden charges. Share files with friends, family, or colleagues without breaking the bank."
        />
        <Section className='know-thing'
          title1="Anywhere Access"
          content="Access your shared files from anywhere, at any time. Whether you're at home, in the office, or on the go, your files are always within reach."
        />
        <Section className='know-thing'
          title1="Reliable Security"
          content="Rest assured that your files are safe and secure with our reliable encryption and password protection features. Share confidently knowing that your data is protected."
        />
      </main>
    </div>
  );
};

export default Features;
