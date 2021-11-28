import React, { Component } from 'react';
import {GoogleApiWrapper, Map, Marker } from 'google-maps-react';


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: { lat: 25.036005962026977, lng: 55.18131476853837}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  

  render() {
    return (
      <Map google={this.props.google} zoom={15} initialCenter={{lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng}} center={{lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng}}>
        <Marker position={{lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng}}  name={'Stories Arabia'}/>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCFsL10msgtNkMseC2aepNGfzyXiJ-h_d4'),
    language: ('en'),
  })(MapContainer)