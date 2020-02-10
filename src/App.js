import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
