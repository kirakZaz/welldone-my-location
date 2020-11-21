import React, { useContext, useEffect, useCallback, useState, memo } from 'react';
import PropTypes from 'prop-types';
import LocationsContext from '../../api/locations/context';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography/Typography";

import ListOption from '../uiComponents/ListOption';
import EditModal from '../uiComponents/Modals/EditModal';
import ViewModal from '../uiComponents/Modals/ViewModal';
import AddLocationModal from '../uiComponents/Modals/AddLocationModal';

import useStyles from './locationsStyles.js'
import TopNavigation from "../TopNavigation";

const Locations = () => {
    const classes = useStyles();
    const locations = useContext(LocationsContext);

    const [open, setOpen] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [modalData, setModalData] = useState({});
    const [editInput, openEditInput] = useState('');
    const [data, setData] = useState({});

    useEffect(() =>{
        locations.get()
    },[]);

    const handleOpenAddLocation = useCallback(() => {
        setOpenAdd(true)
    },[]);

    const handleCloseAddLocation = useCallback(() => {
        setOpenAdd(false)
    },[]);

    const handleChangeLine = useCallback((e) => {
        const { name, value } = e.target;
        setModalData({...modalData, [name]: value})
    }, [setData, data, modalData]);

    const handleView = useCallback((item) => () => {
        setOpenView(true);
        setModalData(item);
    }, []);

    const handleCloseView = useCallback(() => {
        setOpenView(false);
        setModalData({});
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        setModalData({});
    },[]);

    const handleEdit = useCallback((item) => () => {
        setOpen(true);
        setModalData(item);
    },[]);

    const handleEditLine = useCallback((item) => () => {
        openEditInput(item)
    },[]);

    const handleDelete = useCallback((id) => () => {
        locations.remove(id)
    },[locations.data]);

    const handleSave = useCallback(() => {
        locations.put(modalData);
        openEditInput('');
        setOpen(false);
        setModalData({});
    }, [modalData]);

    return (
        <>
            <TopNavigation />
            <Grid>
                <Grid container justify="space-between" alignItems="center">
                    <Grid>
                        <Typography variant="h5">Locations List</Typography>
                    </Grid>
                    <Grid>
                        <Button
                            className={classes.addButton}
                            color="primary"
                            variant="contained"
                            onClick={handleOpenAddLocation}
                        >
                            Add Location
                        </Button>
                    </Grid>
                </Grid>

                <List>
                    {locations?.data?.map((item) => {
                        return (
                            <ListOption
                                key={item.id}
                                handleEdit={handleEdit(item)}
                                handleDelete={handleDelete(item.id)}
                                handleView={handleView(item)}
                                item={item}
                            />
                        )
                    })}
                </List>
                {open && (
                    <EditModal
                        open={open}
                        handleClose={handleClose}
                        modalData={modalData}
                        handleEditLine={handleEditLine}
                        editInput={editInput}
                        handleChangeLine={handleChangeLine}
                        handleSave={handleSave}
                    />)
                }
                {openView && (
                    <ViewModal
                        open={openView}
                        handleClose={handleCloseView}
                        modalData={modalData}
                    />
                )}
                {openAdd && (
                    <AddLocationModal
                        open={openAdd}
                        handleClose={handleCloseAddLocation}
                    />
                )}
            </Grid>
        </>
    );
};

Locations.propTypes = {
test: PropTypes.string
};

export default memo(Locations);