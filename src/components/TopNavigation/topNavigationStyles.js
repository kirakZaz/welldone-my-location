import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: 'calc(100% + 20px)',
        margin: '-10px 0 10px -10px',
        padding: '10px'
    },
    button: {
        background: '#fff',
        margin: '0 10px',
        color: '#1f2c73',
        '&:hover': {
            background: '#c0c7ea'
        }
    }
});

export default useStyles;