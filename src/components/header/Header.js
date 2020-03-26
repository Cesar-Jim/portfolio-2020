import React from 'react';
import ContactForm from '../main/ContactForm';

const Heading = () => {
  return (
    <div className='header__heading'>
      <img
        className='header__heading-image'
        src='/images/cesar.png'
        alt='Cesar Jimenez'
      />
      <h1 className='header__heading-primary'>
        <span className='header__heading-primary--main'>Cesar Jimenez</span>
        <span className='header__heading-primary--sub'>
          Front-end UI | Web Developer
        </span>
      </h1>
    </div>
  );
};

const TextBox = () => {
  return (
    <div className='header__text-box'>
      <div className='header__paragraph-box'>
        <p className='header__paragraph-box--title'>Welcome to my website !</p>
        <br />
        <p className='header__paragraph-box--paragraph'>
          Hi, I'm Cesar, an Electronic Engineer making my way as a Front-End UI
          Web Developer.
        </p>
        <br />
        <p className='header__paragraph-box--paragraph'>
          It's been already 2 years now since I decided to move from the
          Automotive industry to pursue a career in the Tech Industry. Im am
          currently specializing in Front-End technologies such as React,
          however I also enjoy working on the backend.
        </p>
        <br />
        <p className='header__paragraph-box--paragraph'>
          I created this website to share some of my professional information
          along with some of the work I have made during the last couple of
          years. So, thank you for stopping by and please, don't hesitate to get
          in contact should you have a project in mind in which I could be of
          help.
        </p>
        <br />
        <p className='header__paragraph-box--paragraph'>
          If you want to connect on LinkedIn or maybe just check my repos on
          GitHub, the links are just right below these lines.
        </p>
        <br />
        <p className='header__paragraph-box--paragraph'>Cesar.</p>
      </div>
      <div className='header__social-box'>
        <a href='https://github.com/Cesar-Jim' target='blank'>
          <img
            className='header__social-box--github'
            src='/images/github.png'
            alt='Github'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/cesar-jimenez-ribeiro/'
          target='blank'
        >
          <img
            className='header__social-box--linkedin'
            src='/images/linkedin.png'
            alt='LinkedIn'
          />
        </a>
      </div>
    </div>
  );
};

const ContactFormBox = () => {
  return (
    <div className='header__contact-form-box'>
      <ContactForm />
    </div>
  );
};

const Header = () => (
  <div>
    <Heading />
    <div>
      <header className='header'>
        <TextBox />
        <ContactFormBox />
      </header>
    </div>
  </div>
);

export default Header;
