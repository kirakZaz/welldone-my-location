import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import EditableLineItem from '../../EditableLineItem'

const EditModal = (props) => {
    const {open, handleClose, modalData, handleEditLine, editInput, handleChangeLine, handleSave} = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit - {modalData.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <EditableLineItem
                        name="name"
                        value={modalData.name}
                        handleEdit={handleEditLine("name")}
                        editInput={editInput && editInput}
                        handleChange={handleChangeLine}
                    />
                    {modalData.address &&
                        <EditableLineItem
                            name="address"
                            value={modalData.address}
                            handleEdit={handleEditLine("address")}
                            editInput={editInput && editInput}
                            handleChange={handleChangeLine}
                        />
                    }
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

EditModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleEditLine: PropTypes.func.isRequired,
    handleChangeLine: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    modalData: PropTypes.shape({}).isRequired,
    editInput: PropTypes.string.isRequired,
};

export default memo(EditModal);