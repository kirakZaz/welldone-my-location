import React  from 'react'
import PropTypes from 'prop-types';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
    const { location, marker, onClick } = props;

    return (
        <Map
            initialCenter={location}
            google={props.google}
            zoom={14}
            onClick={onClick}
        >
            {marker && (
                <Marker
                    position={location}
                    name={'Current location'}
                />
            )}
        </Map>
    );
};

MapContainer.propTypes = {
    location: PropTypes.shape({}),
    marker: PropTypes.bool,
    onClick: PropTypes.func
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCQ86w8TFTBOg7GJxQGmF8rxHgoapVQBTo'
})(MapContainer);