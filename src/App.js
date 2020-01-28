import React from 'react';

import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import NavBar from './components/header/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};

export default App;
