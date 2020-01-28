import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/top/Header';
import NavBar from './components/top/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};

export default App;
