import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';

import useStyles from './topNavigationStyles.js'

const TopNavigation = () => {
    const classes = useStyles();
    const history = useHistory();

    const goToCat = useCallback( () => {
        history.push('/categories')
    },[history]);

    const goToHomePae = useCallback( () => {
        history.push('/locations')
    },[history]);

    return (
        <AppBar position="static" className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={4}>
                    <Button className={classes.button} onClick={goToCat}>Categories</Button>
                    <Button className={classes.button} onClick={goToHomePae}>Locations</Button>
                </Grid>
            </Grid>
        </AppBar>
    );
};

TopNavigation.propTypes = {

};

export default TopNavigation;