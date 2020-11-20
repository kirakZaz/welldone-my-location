import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(90vh - 20px)',
        width: 'calc(90vw - 20px)',
        margin: '4% auto',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 0 10px 3px #ddd',
    },
    button: {
        margin: '25px 0'
    }
});

export default useStyles;