import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, DirectionsRenderer, InfoWindow } from "react-google-maps"
import issues_service from '../../../services/issues_service';
import './maps.css';

const Map = (props) => {
    const [ issues, setIssues ] = useState(); 
    const [selectedMarker, setSelectedMarker] = useState(null);
    // const [directions, setDirectios] = useState(null);
    const loadIssues = async () => {
      setIssues(await issues_service.getIssues());
    }

    const selectIssue = (issue) => {
      setSelectedMarker(issue)
    }

    useEffect(() => {
      loadIssues();
      return () => {
        
      }
    }, [])

    

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{ lat: 6.5854, lng: 79.9607}}
        >
          {
            issues&&issues.length>0?issues.map((issue)=>
            <Marker position={{ lat: issue.location.coordinates[0], lng: issue.location.coordinates[1]}}
            onClick={()=>selectIssue(issue)}>
            </Marker>
            ):<></>
          }
  
            {/* <Marker position={{ lat: 6.5854, lng: 79.9607}}/> */}
            {
                selectedMarker&&(
                  <InfoWindow  position={{ lat: selectedMarker.location.coordinates[0], lng: selectedMarker.location.coordinates[1]}}
                  onCloseClick={()=>{setSelectedMarker(null)}}>
                    <div className="ct-infowindow">
                      <p className="highlight">{selectedMarker.status&&(selectedMarker.status.type)}</p>
                      <h4>{selectedMarker.title}</h4>
                      <div className="info-im">
                        {/* <img src={'assets/resources/map.png'} alt="location"/> */}
                      </div>
                      <p>{selectedMarker.description}</p>
                      {
                        selectedMarker.votescount&&(
                          <div>
                            <p><span>UPVOTES</span> - {selectedMarker.votescount.upvote}</p>
                            <p><span>DOWNVOTES</span> - {selectedMarker.votescount.downvote}</p>
                          </div>
                        )
                      }
                      {
                        selectedMarker.organization&&(
                          <p><span>RESPONSIBILITY of </span> {selectedMarker.organization.name}</p>
                        )
                      }
                      <div className="info-user">
                        <div className="user-bubble"></div>
                        <div><span>{selectedMarker.createdUser}</span></div>
                      </div>
                      
                      
                    </div>
                  </InfoWindow>
                )
            }
            
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
