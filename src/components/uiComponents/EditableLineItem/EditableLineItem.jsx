import React from 'react';
import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";

const EditableLineItem = (props) => {
    const { value, handleEdit, editInput, name, handleChange } = props;

    return (
        <Grid style={{width: '400px'}}container justify="space-between" alignItems="center">
            <Grid item xs={10}>
                {editInput === name ? (
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        label={value}
                        value={value}
                        type="text"
                        fullWidth
                        name={name}
                    />
                ) : <Typography>{value}</Typography>}
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={handleEdit}><EditIcon /></IconButton>
            </Grid>
        </Grid>
    );
};

EditableLineItem.propTypes = {
    handleEdit: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    editInput: PropTypes.string,
    name: PropTypes.string,

};

export default EditableLineItem;