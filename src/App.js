import React from 'react';

import { Route } from 'react-router-dom';

import NavBar from './components/header/NavBar';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};

export default App;
