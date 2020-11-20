import React, {memo, useCallback} from 'react';
import {useHistory} from "react-router";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

import useStyles from './homeStyles.js'

const Home = () => {
    const classes = useStyles();
    const history = useHistory();

    const goToCat = useCallback( () => {
        history.push('/categories')
    },[history]);

    const goToHomePae = useCallback( () => {
        history.push('/locations')
    },[history]);

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={6}>
                <Typography variant="h5">Hello, My name is Kira Zakirova</Typography>
                <Typography variant="h6">You are in Home page of my home work</Typography>
                <Grid container justify="space-between">
                    <Grid xs={6} item>
                        <Button
                            onClick={goToCat}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Categories
                        </Button>
                    </Grid>
                    <Grid xs={6} item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={goToHomePae}
                            className={classes.button}
                        >
                            Locations
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(Home);