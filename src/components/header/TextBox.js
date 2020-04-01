import React from 'react';

const TextBox = () => {
  return (
    <div className='text-box__container'>
      <div className='text-box__paragraph--container'>
        <h2 className='text-box__paragraph--title'>Welcome to my website!</h2>
        <br />
        <p className='text-box__paragraph--text'>
          Hi, I'm Cesar, an Electronic Engineer making my way as a Front-End UI
          Web Developer.
        </p>
        <br />
        <p className='text-box__paragraph--text'>
          It's been already 2 years now since I decided to move from the
          Automotive industry to pursue a career in the Tech Industry. Im am
          currently specializing in Front-End technologies such as React,
          however I also enjoy working on the backend.
        </p>
        <br />
        <p className='text-box__paragraph--text'>
          I created this website to share some of my professional information
          along with some of the work I have made during the last couple of
          years. So, thank you for stopping by and please, don't hesitate to get
          in contact should you have a project in mind in which I could be of
          help.
        </p>
        <br />
        <p className='text-box__paragraph--text'>
          If you want to connect on LinkedIn or maybe just check my repos on
          GitHub, the links are just right below these lines.
        </p>
        <br />
        <p className='text-box__paragraph--text'>Cesar.</p>
      </div>
      <div className='text-box__social-container'>
        <a href='https://github.com/Cesar-Jim' target='blank'>
          <img
            className='text-box__social-container--github'
            src='/images/github.png'
            alt='Github'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/cesar-jimenez-ribeiro/'
          target='blank'
        >
          <img
            className='text-box__social-container--linkedin'
            src='/images/linkedin.png'
            alt='LinkedIn'
          />
        </a>
      </div>
    </div>
  );
};

export default TextBox;
