import React, {memo, useCallback, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MaterialTable from "material-table";
import tableIcons from '../tableIcons.js'

import CategoriesProvider from "../../api/categories/context";
import LocationsContext from '../../api/locations/context';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

import EditModal from '../uiComponents/Modals/EditModal';
import ViewModal from '../uiComponents/Modals/ViewModal';
import AddLocationModal from '../uiComponents/Modals/AddLocationModal';

import useStyles from './locationsStyles.js'
import TopNavigation from "../TopNavigation";
import MapSection from '../Map'

const Locations = () => {
    const classes = useStyles();
    const locations = useContext(LocationsContext);

    useEffect(() =>{
        locations.get();
    },[]);

    const [open, setOpen] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [modalData, setModalData] = useState({});
    const [editInput, openEditInput] = useState('');
    const [data, setData] = useState({});

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
                <MaterialTable
                    title=""
                    data={locations?.data}
                    icons={tableIcons}
                    options={{
                        grouping: true,
                        sorting: true
                    }}
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Address', field: 'address' },
                        { title: 'Category', field: 'category',
                            render: (row) => {
                                let value;
                                if(row.category){
                                    if(typeof row.category === 'string') {
                                        value = row.category
                                    } else {
                                        value = row.category.join(', ')
                                    }
                                } else if (!row.category && row) {
                                    if(typeof row !== 'string') {
                                        value = row.join(', ')
                                    } else {
                                        value = row
                                    }
                                }

                                return (
                                    <Grid style={{ display: 'inline-block' }}>{value}</Grid>
                                )
                        }},
                        { title: '', render: (row) => (
                            <Grid container justify="flex-end">
                                <IconButton onClick={handleEdit(row)}><EditIcon /></IconButton>
                                <IconButton onClick={handleDelete(row)}><DeleteIcon /></IconButton>
                                <IconButton onClick={handleView(row)}><VisibilityIcon /></IconButton>
                            </Grid>
                            )}

                    ]}
                    detailPanel={[
                        {
                            tooltip: 'Show Map',
                            render: rowData => {
                                return (
                                    <Grid style={{height: '300px', position: 'relative'}}>
                                        <MapSection
                                            location={rowData.coordinates}
                                            props={rowData}
                                            zoomLevel={17}
                                            marker
                                        />
                                    </Grid>
                                )
                            }
                        }
                    ]}
                />
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