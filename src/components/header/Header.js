import React from 'react';

const Header = () => (
  <header className='header'>
    <div className='header__text-box'>
      <h1 className='header__heading-primary'>
        <span className='header__heading-primary--main'>Cesar Jimenez</span>
        <span className='header__heading-primary--sub'>
          Front-end UI | Web Developer
        </span>
      </h1>
      <div className='header__paragraph-box'>
        <p>Welcome!</p>
        <br />
        <p className='paragraph'>
          Hi, I'm Cesar and I am an Electronic Engineer making my way as a
          Front-End UI Web Developer.
        </p>
        <br />
        <p>
          It's been already 2 years now since I decided to move from the
          Automotive industry to pursue a career in the Tech Industry. Im am
          currently specializing in Front-End technologies, however I enjoy
          working also in the backend.
        </p>
        <br />
        <p>
          I created this website to share some of my professional information
          along with some of the work I have made during recent years. Thank you
          for stopping by and please, don't hesitate to get in contact, should
          you have a project in mind in which I could help.
        </p>
        <br />
        <p>Cesar.</p>
      </div>
      <div className='header__social-box'>
        <a href='https://github.com/Cesar-Jim' target='blank'>
          <img
            className='header__social-box--github'
            src='/images/github.png'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/cesar-jimenez-ribeiro/'
          target='blank'
        >
          <img
            className='header__social-box--linkedin'
            src='/images/linkedin.png'
          />
        </a>
      </div>
    </div>
    <div className='header__image-box'>
      <img
        className='header__secondary-image'
        src='/images/that-is-me.png'
        alt="That's Cesar"
      />
      <img
        className='header__primary-image'
        src='/images/cesar.png'
        alt='Cesar Jimenez'
      />
      <a href='#' className='btn btn--white btn--animated'>
        Email Me
      </a>
    </div>
  </header>
);

export default Header;
