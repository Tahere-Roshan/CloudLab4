// reference-https://developers.google.com/maps/documentation/javascript/get-api-key - 
//https://stackoverflow.com/questions/69676563/react-google-maps-api-referenceerror-google-is-not-defined
//https://www.youtube.com/watch?v=iP3DnhCUIsE
//https://www.npmjs.com/package/@react-google-maps/api
//


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react'
import { Component } from 'react'
import { Form } from 'react-router-dom'


class GoogleApp extends Component{
  render(){
    return(
      <div className='App'>
        <header className='App-Header'>
          <h1 className='App-title'>Google-Map</h1>
        </header>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClicl}
          name={'Current location'}/>
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectOlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apikey:(YOUR_GOOGLE_API_KEY_GOES_HERE)
})(GoogleApp)
