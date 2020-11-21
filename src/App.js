import React, { memo, useEffect, useState } from 'react';

import './App.css';
import TopNavigation from './components/TopNavigation'
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