import React, {useCallback, useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import LocationsContext from "../../api/locations/context";


const TopNavigation = () => {

    const history = useHistory();

    const goToCat = useCallback( () => {
        history.push('/categories')
    },[history]);

    const goToHomePae = useCallback( () => {
        history.push('/')
    },[history]);

    return (
        <AppBar position="static">
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={4}>title</Grid>
                <Grid item xs={4}>
                    <Button onClick={goToHomePae}>Home</Button>
                    <Button onClick={goToCat}>Categories</Button>
                </Grid>
            </Grid>
        </AppBar>
    );
};

TopNavigation.propTypes = {

};

export default TopNavigation;