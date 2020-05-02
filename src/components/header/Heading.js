import React from 'react';
import Particles from './Particles';

const Heading = () => {
  return (
    <div className='heading__container'>
      <Particles />
      <picture>
        <source srcset="/images/cesar.webp" type="image/webp" />
        <source srcset="/images/cesar.png" type="image/png" /> 
        <img className='heading__image' src="/images/cesar.png" alt="Cesar Jimenez" />
      </picture>
      <h1 className='heading__title'>
        <span className='heading__title--main'>Cesar Jimenez</span>
        <span className='heading__title--sub'>
          Front-end UI | Web Developer
        </span>
      </h1>
    </div>
  );
};

export default Heading;
