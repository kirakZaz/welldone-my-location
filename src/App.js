import React, { memo } from 'react';

import './App.css';
import Router from "./Routes/Router";

import Providers from './providers.js'
import apiProviders from "./api/providers";

const App = () => {
  return (
      <Providers providers={apiProviders}>
          <Router />
      </Providers>
  );
};

export default memo(App);