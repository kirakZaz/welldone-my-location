import React from 'react';

import './App.css';
import TopNavigation from './components/TopNavigation'
import Router from "./Routes/Router";

import Providers from './providers.js'
import apiProviders from "./api/providers";

const App = ({routes}) => {
console.log('test-----',routes)

  return (
      <Providers providers={apiProviders}>
          <TopNavigation  />
          <Router routes={routes}/>
      </Providers>
  );
};

export default App;