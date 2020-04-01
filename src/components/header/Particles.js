import React, { useState } from 'react';
import Particles from 'react-particles-js';

const particlesColor = '#eb6d4c';

const particleOpt = {
  particles: {
    color: { value: particlesColor },
    number: {
      value: 70
    },
    density: {
      enable: false
    },
    size: {
      value: 0
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
      direction: 'left',
      speed: 1.5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      }
    },
    modes: {
      bubble: { distance: 150, size: 15 },
      grab: { distance: 200 }
    }
  }
};

const HeaderParticles = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const height = 410;

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
