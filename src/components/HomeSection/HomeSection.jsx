import React, {useContext, useEffect, useCallback, useState} from 'react';
import LocationsContext from '../../api/locations/context'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditIcon from '@material-ui/icons/Edit';

const HomeSection = (props) => {
    const locations = useContext(LocationsContext);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [editInput, openEditInput] = useState('');

    useEffect(() =>{
        locations.get()
    },[]);

    const handleView = useCallback((item) => () => {
        setOpen(true);
        setModalData(item);
    }, []);

    const handleClose = () => {
        setOpen(false);
        setModalData({});
    };

    const handleEdit = (id) => () => {
        console.log('id',id)
        openEditInput(id)
    };

    const handleSave = () => {
        locations.put({})
        openEditInput('');
        console.log('save')
    };

    console.log('location home',editInput);
    return (
        <Grid>
            <List>
                {/*{locations?.data?.map((item) => {*/}
                {locations?.data?.map((item) => {
                    return (
                        <ListItem key={item.id} onClick={handleView(item)}>{item.name}</ListItem>
                    )
                })}
            </List>
            {open && <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit - {modalData.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalData.address}
                        <Grid container justify="space-between">
                            <Typography>{modalData.name}</Typography>
                            <IconButton onClick={handleEdit(modalData.id)}><EditIcon /></IconButton>
                            {editInput === modalData.id && (
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label={modalData.name}
                                    type="text"
                                    fullWidth
                                />
                            )}
                        </Grid>
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
            }
        </Grid>
    );
};

HomeSection.propTypes = {

};

export default HomeSection;