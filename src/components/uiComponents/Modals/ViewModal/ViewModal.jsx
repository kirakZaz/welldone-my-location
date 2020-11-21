import React, { memo } from 'react';
import PropTypes from 'prop-types';

import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Grid from "@material-ui/core/Grid/Grid";
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
    root: {
        minWidth: '340px'
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ViewModal = (props) => {
    const classes = useStyles();
    const {open, handleClose, modalData} = props;

    return (
        <Dialog open={open} onClose={handleClose} classes={{ paper: classes.root }}>
            <DialogTitle>View - {modalData.name}</DialogTitle>
            <DialogContent>
                {Object.keys(modalData).map((keyItem) => {
                    return (
                            modalData[keyItem] && (
                                <Grid container justify="flex-start" key={keyItem}>
                                    <ListItem>
                                        <Grid>
                                            {capitalizeFirstLetter(keyItem)}:&nbsp;
                                        </Grid>
                                        <Grid>{modalData[keyItem]}</Grid>
                                    </ListItem>
                                </Grid>
                        )
                    )
                })}
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