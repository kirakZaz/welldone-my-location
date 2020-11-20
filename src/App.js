import React, { memo, useEffect, useState } from 'react';

import './App.css';
import TopNavigation from './components/TopNavigation'
import Router from "./Routes/Router";

import Providers from './providers.js'
import apiProviders from "./api/providers";
import {useHistory} from "react-router";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    hide: (props) => {
        const { path } = props;
        console.log('111111111111', path)
        return ({})
    }
});

const App = () => {
    // console.log('routes', window.location.pathname)

    const classes = useStyles();
  return (
      <Providers providers={apiProviders}>
          {/*{history.location.pathname !== '/' && */}
          <TopNavigation className={classes.hide} />
          <Router />
      </Providers>
  );
};

export default memo(App);