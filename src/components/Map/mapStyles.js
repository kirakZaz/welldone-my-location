import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    mapH2: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    padding: '20px',
    paddingLeft: '10px',
    textAlign: 'center'
},

googleMap: {
    width: '100%',
    height: '60vh'
}
//
// .pin {
//     display: flex;
//     align-items: center;
//     width: 180px;
//     color: var(--main-blue);
// }
//
// .pin-icon {
//     font-size: 4rem;
// }
//
// .pin-text {
//     font-size: 1.3em;
// }
//
// @media screen and (min-width: 799px) {
// .google-map {
//         height: 80vh;
//     }
//
// .map-h2 {
//         font-size: 1.3rem;
//         font-weight: 400;
//     }
//
// .pin {
//         width: 15vw;
//     }
//
// .pin-icon {
//         font-size: 10vw;
//     }
// }
});

export default useStyles