import React, { useState } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, DirectionsRenderer } from "react-google-maps"
// import SidePanel from './children/side-panel';
import './maps.css';

const Map = (props) => {

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [directions, setDirectios] = useState(null);

    const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(6.9271, 79.8612),
          destination: new window.google.maps.LatLng(7.2906, 80.6337),
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
              setDirectios(result);
            // this.setState({
            //   directions: result
            // });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{ lat: 6.9271, lng: -87.6512600}}
        >
            {props.directions && <DirectionsRenderer directions={directions} />}
  
            <Marker position={{ lat: 6.9271, lng: -87.6512600}}/>
            {/* {
                setSelectedMarker&&(
                <infowindow position={{lat: 6.9271, lng: 79.8612}}>
                    <h4>Location Pointer</h4>
                </infowindow>
                )
            } */}
            
        </GoogleMap>
    );

}

const WrapMap = withScriptjs(withGoogleMap(Map));

const MapDefault = () =>{

    return (
        <>
            <div style={{width:"98.8vw", height:"90vh", overflow:'hidden'}}>
                <WrapMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDAsJYZSQ92_NQAz9kiSpW1XpyuCxRl_uI"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>

        </>
    );
}

export default MapDefault;
