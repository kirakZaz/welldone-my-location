import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';


import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const categories = [
    {name: 'Malls'},
    {name: 'Food'},
    {name: 'Work Area'},
    {name: 'Parks'}
];

const Categories = () => {

    const [selected, setSelected] = useState(null);
    const handleEdit = useCallback(()=>{},[]);
    const handleDelete = useCallback(()=>{},[]);
    const handleView = useCallback(()=>{},[]);
    const handleSelected = useCallback((name)=>()=>{
        setSelected(name)
    },[selected]);
    return (
        <Grid container>
            {categories?.map((category) => {
                return (
                    <Grid container justify="space-between" alignItems="center" key={category.name} onClick={handleSelected(category.name)}>
                        <Typography variant='h5'>{category.name}</Typography>
                        {selected === category.name && <Grid>
                            <IconButton onClick={handleEdit}><EditIcon /></IconButton>
                            <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
                            <IconButton onClick={handleView}><VisibilityIcon /></IconButton>
                        </Grid>}
                    </Grid>
                )
            })}
        </Grid>
    );
};

Categories.propTypes = {
    
};

export default Categories;