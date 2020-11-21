import React, { useCallback, useContext, useEffect, useState, memo } from 'react';

import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button/Button";
import ListOption from "../uiComponents/ListOption";
import EditModal from "../uiComponents/Modals/EditModal";
import ViewModal from "../uiComponents/Modals/ViewModal";
import Typography from "@material-ui/core/Typography/Typography";

import AddCategoryModal from '../uiComponents/Modals/AddCategoryModal'
import TopNavigation from "../TopNavigation";

import CategoriesContext from "../../api/categories/context";
import useStyles from './categoriesStyles.js'

const Categories = () => {
    const classes = useStyles();
    const categories = useContext(CategoriesContext);

    useEffect(() =>{
        categories.get()
    },[]);

    const [modalData, setModalData] = useState({});
    const [editInput, openEditInput] = useState('');
    const [openView, setOpenView] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const handleOpenAddCategory = useCallback(() => {
        setOpenAdd(true)
    },[]);

    const handleChangeLine = useCallback((e) => {
        const { name, value } = e.target;
        setModalData({...modalData, [name]: value})
    }, [modalData]);

    const handleEdit = useCallback((item) => () => {
        setOpen(true);
        setModalData(item);
    },[]);

    const handleEditLine = useCallback((item) => () => {
        openEditInput(item)
    },[]);

    const handleDelete = useCallback((id) => () => {
        categories.remove(id)
    },[categories.data]);

    const handleView = useCallback((item) => () => {
        setOpenView(true);
        setModalData(item);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        setModalData({});
    },[]);

    const handleCloseView = useCallback(() => {
        setOpenView(false);
        setModalData({});
    }, []);

    const handleCloseAddCategory = useCallback(() => {
        setOpenAdd(false)
    },[]);

    const handleSave = useCallback(() => {
        categories.put(modalData);
        openEditInput('');
        setOpen(false);
        setModalData({});
    }, [categories, modalData]);

    return (
        <>
            <TopNavigation />
            <Grid container>
            <Grid container justify="space-between" alignItems="center">
                <Typography variant="h5">Categories List</Typography>
                <Button
                    className={classes.addButton}
                    color="primary"
                    variant="contained"
                    onClick={handleOpenAddCategory}
                >
                    Add Category
                </Button>
            </Grid>

            {categories?.data?.map((category) => {
                return (
                    <ListOption
                        key={category.id}
                        handleEdit={handleEdit(category)}
                        handleDelete={handleDelete(category.id)}
                        handleView={handleView(category)}
                        item={category}
                    />

                )
            })}
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
                <AddCategoryModal
                    open={openAdd}
                    handleClose={handleCloseAddCategory}
                />
            )}
        </Grid>
        </>
    );
};

Categories.propTypes = {
    
};

export default memo(Categories);