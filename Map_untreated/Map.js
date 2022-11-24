import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import  './Map.module.css';
const style = {
    maxWidth: "20px",
    height: "20px",
    overflowX: "hidden",
    overflowY: "hidden"
   };
   const containerStyle = {
    maxWidth: "20px",
    height: "20px"
   };
function map() {
    return(
       
        <div> 
        <Map google = {this.props.google} style = {style} containerStyle={containerStyle}/>
        </div>
    );
}

export default GoogleApiWrapper(
    {
        apiKey: "AIzaSyCYK8x8EyxKxEba0QftXmrSvC4TsDzlJg0"        
    }
)(Map)
