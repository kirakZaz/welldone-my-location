import React, { useContext, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import Grid from '@material-ui/core/Grid'
import TextField from "@material-ui/core/TextField/TextField";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import CategoriesProvider from "../../../../api/categories/context";

const AddCategoryModal = props => {
    const { open, handleClose } = props;
    const categories = useContext(CategoriesProvider);

    useEffect(() => {
        categories.get()
    }, []);

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Add Location</DialogTitle>
            <Formik
                initialValues={{
                    name: '',
                    address: '',
                    coordinates: '',
                    category: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name is Required';
                    }

                    return errors;
                }}
                onSubmit={(values ) => {
                    categories.post(values)
                    handleClose()
                }}
            >
                {(formikProps) => {
                    const {values, errors, touched, handleChange, handleSubmit} = formikProps;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Field
                                            component={TextField}
                                            fullWidth
                                            name="name"
                                            label='Name'
                                            onChange={handleChange('name')}
                                            value={values.name}
                                        />
                                        {errors.name && touched.name && errors.name}
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

AddCategoryModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default memo(AddCategoryModal);