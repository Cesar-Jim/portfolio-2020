import React from 'react';

import Heading from './Heading';
import TextBox from './TextBox';
import ContactForm from './ContactForm';

const Header = () => (
  <div className='header__container'>
    <div className='header__container--main'>
      <Heading />
    </div>
    <div className='header__container--sub'>
      <TextBox />
      <ContactForm />
    </div>
  </div>
);

export default Header;
