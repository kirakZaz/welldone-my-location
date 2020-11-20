import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";

import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
        border: '1px solid #ddd',
        borderRadius: '3px',
        boxShadow: '0 3px 5px 2px #ddd',
        height: '48px',
        padding: '0 30px',
        margin: '0 0 10px 0'
    },
});


const ListOption = (props) => {
    const classes = useStyles();
    const {item, handleEdit, handleDelete, handleView } = props;
    return (
        <Grid container justify="space-between" alignItems="center" key={item.name} className={classes.root}>
            <Typography variant='h6'>{item.name}</Typography>
            {<Grid>
                <IconButton onClick={handleEdit}><EditIcon /></IconButton>
                <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
                <IconButton onClick={handleView}><VisibilityIcon /></IconButton>
            </Grid>}
        </Grid>
    );
};

ListOption.propTypes = {
    item: PropTypes.shape({}).isRequired,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    handleView: PropTypes.func
};

export default ListOption;