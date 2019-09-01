import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '200px'
};

const myLatLng = {lat: 12.992473, lng: 77.753872};

const MapContainer = ({ google }) => (
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
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSu1tT3y9jHhaC0sNxDufs6kPmA9vdNL0'
})(MapContainer);
