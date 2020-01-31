import React from 'react';

const NavBar = () => (
  <nav className='navbar'>
    <div className='navbar__logo-box'>
      <img className='navbar__logo' src='/images/logo-cesar.png' alt='Logo' />
    </div>
    <div className='navbar__list-box'>
      <ul className='navbar__list'>
        <li className='navbar__item'>Item1</li>
        <li className='navbar__item'>Item2</li>
        <li className='navbar__item'>Item3</li>
        <li className='navbar__item'>Item4</li>
        <li className='navbar__item'>Item5</li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
