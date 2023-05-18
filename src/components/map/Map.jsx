import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import LocationPin from '../LocationPin';

const API_KEY = process.env.REACT_APP_API_KEY;

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY}}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map;