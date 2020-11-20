import React, { memo } from 'react';
import PropTypes from 'prop-types';

import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Grid from "@material-ui/core/Grid/Grid";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ViewModal = (props) => {
    const {open, handleClose, modalData} = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">View - {modalData.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {Object.keys(modalData).map((keyItem) => {
                        return (
                                modalData[keyItem] && (
                                    <Grid container justify="flex-start">
                                        <Grid>
                                            {capitalizeFirstLetter(keyItem)}:&nbsp;
                                        </Grid>
                                        <Grid>{modalData[keyItem]}</Grid>
                                    </Grid>
                            )
                        )
                    })}

                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ViewModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    modalData: PropTypes.shape({}).isRequired
};

export default memo(ViewModal);