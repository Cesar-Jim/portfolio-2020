import React from 'react';

const NavBar = () => (
  <nav className='navbar'>
    <div className='navbar__logo-box'>
      <h1 className='navbar__logo'>
        <span className='navbar__heading-primary--name'>Cesar</span>
        <span className='navbar__heading-primary--last'>Jimenez</span>
        <span className='navbar__heading-primary--last'>Web Developer</span>
      </h1>
    </div>
    <div className='navbar__list-box'>
      <ul className='navbar__list'>
        <li className='navbar__item'>Skills</li>
        <li className='navbar__item'>Work</li>
        <li className='navbar__item'>LinkedIn</li>
        <li className='navbar__item'>GitHub</li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
