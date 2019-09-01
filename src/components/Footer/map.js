import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '200px'
};

const myLatLng = {lat: 12.9204082, lng: 77.6737737};

const MapContainer = ({ google }) => (
  // <>
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={myLatLng}
      disableDefaultUI={true}
    >
    <Marker
      position={myLatLng}
      label="S"
      title="SAI"
      animation={google.maps.Animation.DROP}
    />
    </Map>
  // </>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSu1tT3y9jHhaC0sNxDufs6kPmA9vdNL0'
})(MapContainer);
