import React from 'react';
import Coverflow from 'react-coverflow';

const numberOfDisplayedImages = () => {
  const windowWidth = window.innerWidth;
  let displayQuantityOfSide = 0;

  if (windowWidth > 1600) {
    displayQuantityOfSide = 4;
  }

  if (windowWidth > 1300 && windowWidth <= 1600) {
    displayQuantityOfSide = 3;
  }

  if (windowWidth > 800 && windowWidth <= 1300) {
    displayQuantityOfSide = 2;
  }

  if (windowWidth <= 800) {
    displayQuantityOfSide = 1;
  }

  console.log(displayQuantityOfSide);
  return displayQuantityOfSide;
};

window.addEventListener('resize', numberOfDisplayedImages);

const Carousel = () => (
  <div>
    <Coverflow
      className='coverflow'
      displayQuantityOfSide={numberOfDisplayedImages()}
      navigation={false}
      enableScroll={true}
      clickable={true}
      active={0}
      enableHeading={true}
      media={{
        '@media (min-width: 1800px)': {
          width: '100%',
          height: '500px'
        },
        '@media (max-width: 1799px)': {
          width: '100%',
          height: '460px'
        },
        '@media (max-width: 799px)': {
          width: '100%',
          height: '500px'
        },
        '@media (max-width: 399px)': {
          width: '100%',
          height: '360px'
        }
      }}
    >
      <img
        src='/images/apps/tribe-app.PNG'
        alt='Tribe App'
        data-action='https://cesar-jimenez-tribeapp.herokuapp.com/'
        style={{ display: 'block', width: '100%' }}
      />
      <img
        src='/images/apps/zaplabs.PNG'
        alt='Zaplabs'
        data-action='https://new.myzap.com/'
        style={{ display: 'block', width: '100%' }}
      />
      <img
        src='/images/apps/uva.PNG'
        alt='Uva'
        data-action='https://cesar-jimenez-uva.herokuapp.com/'
        style={{ display: 'block', width: '100%' }}
      />
      <img
        src='/images/apps/natours.PNG'
        alt='Natours'
        style={{ display: 'block', width: '100%' }}
      />

      <img
        src='/images/apps/cb-homes.PNG'
        alt='Coldwell-Banker'
        data-action='https://www.coldwellbankerhomes.com/'
        style={{ display: 'block', width: '100%' }}
      />
      <img src='/images/apps/jams.PNG' alt='Jams' />
      <img src='/images/apps/cap-store.PNG' alt='Cortes Al Punto' />
      <img
        src='/images/apps/blocipedia.PNG'
        alt='Blocipedia'
        data-action='https://cesar-jimenez-blocipedia-node.herokuapp.com/'
        style={{ display: 'block', width: '100%' }}
      />
    </Coverflow>
  </div>
);

export default Carousel;
