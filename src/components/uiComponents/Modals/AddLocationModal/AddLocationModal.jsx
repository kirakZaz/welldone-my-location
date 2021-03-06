import React, {memo, useContext, useEffect, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import Grid from '@material-ui/core/Grid'
import TextField from "@material-ui/core/TextField/TextField";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Select from '@material-ui/core/Select';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography/Typography";
import InputLabel from '@material-ui/core/InputLabel';

import CategoriesProvider from "../../../../api/categories/context";
import LocationsContext from "../../../../api/locations/context";
import MapSection from '../../../../components/Map'

import useStyles from './addLocatiosStyles.js'

const AddLocationModal = props => {
    const { open, handleClose } = props;
    const classes = useStyles();
    const categories = useContext(CategoriesProvider);
    const locations = useContext(LocationsContext);

    const [marker, setMarker] = useState(false);

    const handleSelectLocation = useCallback((setFieldValue) => (t, map, coord)  => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        setFieldValue('coordinates', {lat: lat, lng: lng});
        setMarker(true)

    }, []);

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
            <Formik
                initialValues={{
                    name: '',
                    address: '',
                    coordinates: { lat: 32.081222, lng: 34.778017 },
                    category: []
                }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name is Required';
                    }
                    if (!values.address) {
                        errors.address = 'Address is Required';
                    }
                    if (!values.coordinates) {
                        errors.coordinates = 'Coordinates is Required';
                    }
                    const reg = /^-?[0-9]{1,3}[.][0-9]+/i;
                    if (!reg.test(values.coordinates.lat) && !reg.test(values.coordinates.lng)) {
                        errors.coordinates = 'Coordinates is Invalid';
                    }

                    if (!values.category) {
                        errors.category = 'Category is Required';
                    }

                    return errors;
                }}
                onSubmit={(values ) => {
                    locations.post(values);
                    handleClose()
                }}
            >
                {(formikProps) => {
                    // console.log('formikProps', formikProps)
                    const {values, errors, touched, handleChange, handleSubmit, setFieldValue} = formikProps;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <Grid container>
                                        <Grid item xs={12} className={classes.inputWrapper}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                name="name"
                                                label='Name'
                                                onChange={handleChange('name')}
                                                value={values.name}
                                            />
                                            {errors.name && touched.name && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.name}
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={12} className={classes.inputWrapper}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                label="Address"
                                                name="address"
                                                onChange={handleChange('address')}
                                                value={values.address}
                                            />
                                            {errors.address && touched.address && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.address}
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={12} className={classes.inputWrapper}>
                                            <Field
                                                component={TextField}
                                                fullWidth
                                                label="Coordinates"
                                                name="coordinates"
                                                onChange={handleChange('coordinates')}
                                                value={`${values.coordinates.lat} - ${values.coordinates.lng}`}
                                            />
                                            <Grid style={{height: '200px', width: '100%', position: 'relative'}}>
                                                <MapSection
                                                    location={values.coordinates}
                                                    marker={marker}
                                                    onClick={handleSelectLocation(setFieldValue)}/>
                                            </Grid>
                                            {errors.coordinates && touched.coordinates && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.coordinates}
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={12} className={`${classes.inputWrapper} ${classes.selectInput}`}>
                                            <InputLabel>Category</InputLabel>
                                            <Field
                                                component={Select}
                                                fullWidth
                                                label="Category"
                                                name="category"
                                                onChange={handleChange('category')}
                                                value={values.category}
                                                multiple
                                                inputProps={{
                                                    label: "Category",
                                                    multiple: true
                                                }}
                                            >
                                                {categories.data.map((option) => {
                                                    return (
                                                        <ListItem
                                                            value={option.name}
                                                            key={option.id}
                                                        >
                                                            {option.name}
                                                        </ListItem>
                                                    )
                                                })}
                                            </Field>

                                            {errors.category && touched.category && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.category}
                                                </Typography>
                                            )}
                                        </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </DialogActions>
                        </Form>
                    )
                }}
            </Formik>
        </Dialog>
    );
};

AddLocationModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default memo(AddLocationModal);