import React from 'react';

const Header = () => (
  <header className='header'>
    <div className='header__logo-box'></div>
    <div className='header__title-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary--main'>Cesar Jimenez</span>
        <span className='heading-primary--subtitle'>
          Front-end / UI Web Developer
        </span>
      </h1>
      <a href='#' className='btn btn--white btn--animated'>
        Contact me
      </a>
    </div>
  </header>
);

export default Header;
