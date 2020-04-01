import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

// Randomizers
const randomNum = (minimum, maximum) => {
  const min = Number.isInteger(minimum) ? minimum : Math.ceil(minimum);
  const max = Number.isInteger(maximum) ? maximum : Math.floor(maximum);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const HeaderParticles = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [particles, setParticles] = useState(40);
  const height = 410;
  const particlesColor = '#eb6d4c';
  const particleMovementType = [
    'none',
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
    'top-left'
  ];
  const particleHoverType = ['grab', 'bubble', 'repulse'];

  const particleOpt = {
    particles: {
      color: { value: particlesColor },
      number: {
        value: particles
      },
      density: {
        enable: false
      },
      size: {
        value: randomNum(0, 2)
      },
      opacity: {
        random: true
      },
      shape: {
        stroke: {
          width: 1,
          color: particlesColor
        }
      },
      line_linked: {
        color: particlesColor
      },
      move: {
        enable: true,
        direction: particleMovementType[randomNum(0, 9)],
        speed: randomNum(1.1, 3.0)
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: particleHoverType[randomNum(0, 3)]
        }
      },
      modes: {
        grab: { distance: 200 },
        bubble: { distance: 150, size: 15 },
        repulse: { distance: 50 }
      }
    }
  };

  useEffect(() => {
    // Set number of particles
    let numOfParticles = 0;

    if (window.innerWidth < 320) {
      numOfParticles = randomNum(20, 36);
    }

    if (window.innerWidth >= 320 && window.innerWidth < 576) {
      numOfParticles = randomNum(35, 56);
    }

    if (window.innerWidth >= 576 && window.innerWidth < 768) {
      numOfParticles = randomNum(55, 66);
    }

    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      numOfParticles = randomNum(65, 86);
    }

    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      numOfParticles = randomNum(105, 126);
    }

    if (window.innerWidth >= 1200 && window.innerWidth < 1680) {
      numOfParticles = randomNum(125, 146);
    }

    if (window.innerWidth >= 1680) {
      numOfParticles = randomNum(170, 201);
    }

    setParticles(numOfParticles);

    // Set type of movement
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  window.removeEventListener('resize', handleResize);

  return (
    <Particles
      className='particles__background'
      params={particleOpt}
      width={width}
      height={height}
    />
  );
};

export default HeaderParticles;
