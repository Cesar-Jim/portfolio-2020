import React from 'react';
import Coverflow from 'react-coverflow';

const Carousel = () => (
  <div>
    <h2 className='projects__title'>Professional & Personal Projects</h2>
    <Coverflow
      width='960'
      height='400'
      displayQuantityOfSide={4}
      navigation={false}
      enableScroll={false}
      clickable={true}
      active={0}
      enableHeading={false}
    >
      <img
        src='/images/apps/tribe-app.png'
        alt='Tribe App'
        data-action='https://cesar-jimenez-tribeapp.herokuapp.com/'
      />
      <img
        src='/images/apps/zaplabs.png'
        alt='Zaplabs'
        data-action='https://new.myzap.com/'
      />
      <img
        src='/images/apps/uva.png'
        alt='Uva'
        data-action='https://cesar-jimenez-uva.herokuapp.com/'
      />
      <img
        src='/images/apps/cb-homes.png'
        alt='Coldwell-Banker'
        data-action='https://www.coldwellbankerhomes.com/'
      />

      <img src='/images/apps/jams.png' alt='Jams' />
      <img src='/images/apps/cap-store.png' alt='Cortes Al Punto' />
      <img
        src='/images/apps/blocipedia.png'
        alt='Blocipedia'
        data-action='https://cesar-jimenez-blocipedia-node.herokuapp.com/'
      />
    </Coverflow>
    ,
  </div>
);

export default Carousel;
