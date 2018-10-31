import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Map, TileLayer } from 'react-leaflet';

import Markers from './Markers';

// Displays the Bike Map
class BikeMap extends Component {

    constructor(props){
      super(props);
    }

    render() {

      var searchPosition = [this.props.lng, this.props.lat];

        return (

          <div>

          <Map className="map" center={searchPosition} zoom={8}>

            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Markers />

          </Map>

          {/* Display if no search results found */}
          {
            (this.props.bikeData === null)
            ? <div className="noResults">No Search Results Found!</div>
            : <div></div>
          }

        </div>

      ) 
    }
}


// Map Props from Global State
function mapStateToProps(state){
    
  return {
    bikeData: state.bikeData, 
    lat: state.lat, 
    lng: state.lng
  }
}

export default connect(
  mapStateToProps,
  null
)(BikeMap);