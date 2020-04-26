import React from 'react';
import Coverflow from 'react-coverflow';

const numberOfDisplayedImages = () => {
  const windowWidth = window.innerWidth;
  let displayQuantityOfSide = 0;

  if (windowWidth >= 1680) {
    displayQuantityOfSide = 4;
  }

  if (windowWidth >= 1200 && windowWidth < 1680) {
    displayQuantityOfSide = 3;
  }

  if (windowWidth >= 992 && windowWidth < 1200) {
    displayQuantityOfSide = 2;
  }

  if (windowWidth >= 768 && windowWidth < 992) {
    displayQuantityOfSide = 2;
  }

  if (windowWidth >= 576 && windowWidth < 768) {
    displayQuantityOfSide =1;
  }

  if (windowWidth >= 320 && windowWidth < 576) {
    displayQuantityOfSide = 1;
  }

  if (windowWidth < 320) {
    displayQuantityOfSide = 1;
  }

  return displayQuantityOfSide;
};

window.addEventListener('resize', numberOfDisplayedImages);

const Carousel = () => (
  <div>
    <Coverflow
      className='coverflow'
      displayQuantityOfSide={numberOfDisplayedImages()}
      enableScroll={false}
      clickable={true}
      active={0}
      enableHeading={false}
      currentFigureScale={1.7}
      otherFigureScale={0.7}
      media={{
        '@media (min-width: 1680px)': {
          width: '100%',
          height: '600px',
        },
        '@media (max-width: 1679.98px)': {
          width: '100%',
          height: '500px',
        },
        '@media (max-width: 1199.98px)': {
          width: '100%',
          height: '480px',
        },
        '@media (max-width: 767.98px)': {
          width: '100%',
          height: '460px',
        },
        '@media (max-width: 575.98px)': {
          width: '100%',
          height: '340px',
        },
        '@media (max-width: 319.98px)': {
          width: '100%',
          height: '260px',
        },
      }}
    >
      <img className="carousel-image" src='/images/apps/tribe-app.webp' alt='Tribe App' />
      <img className="carousel-image" src='/images/apps/zaplabs.webp' alt='Zaplabs' />
      <img className="carousel-image" src='/images/apps/uva.webp' alt='Uva' />
      <img className="carousel-image" src='/images/apps/natours.webp' alt='Natours' />
      <img
      className="carousel-image"
        src='/images/apps/cb-homes.webp'
        alt='Coldwell-Banker'
        style={{ backfaceVisibility: 'initial !important' }}
      />
      <img className="carousel-image" src='/images/apps/jams.webp' alt='Jams' />
      <img className="carousel-image" src='/images/apps/cap-store.webp' alt='Cortes Al Punto' />
      <img className="carousel-image" src='/images/apps/blocipedia.webp' alt='Blocipedia' />
      <img className="carousel-image" src='/images/apps/galaxy-shooter.webp' alt='Shooter' />
    </Coverflow>
  </div>
);

export default Carousel;
