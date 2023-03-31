import * as React from 'react';
import {render} from 'react-dom';
import { NavigationControl, GeolocateControl, Map } from 'react-map-gl';

import GeocoderControl from './geocoder-control';
import ControlPanel from './control-panel';

// eslint-disable-next-line

const TOKEN = process.env.MapboxAccessToken;

export default function App() {
  
  return (
    <>
      <Map
      // Philly
        // initialViewState={{
        //   longitude: -75.1637382,
        //   latitude: 39.9518646,
        //   zoom: 9
        // }}
        // Death Valley, CA
        initialViewState={{
          longitude: -120.7850020,
          latitude: 35.2756109,
          zoom: 10
        }}  
        // New York/Canada     
        // initialViewState={{
        //   longitude: -80.2939977,
        //   latitude: 45.0776655,
        //   zoom: 6
        // }}                 
        // center on US
        // initialViewState={{
        //   longitude: -98.5795,
        //   latitude: 39.8283,
        //   zoom: 4
        // }}
        // Ojai, CA - For Mineral style ONLY
        // initialViewState={{
        //   longitude: -119.2561,
        //   latitude: 34.448,
        //   zoom: 13
        // }}
//       // Decimal
            // mapStyle = "mapbox://styles/joeybbox/clarefc99001m14qxa1s1zqpv"
//       //
//       // Blueprint
        //  mapStyle = "mapbox://styles/joeybbox/claufvkw6000u14rw1nzkqjoy"
//       //
//       // Mineral
         mapStyle = "mapbox://styles/joeybbox/clareeejy001y14ljrwcstfwt"
//       //
//       // Cali Terrain
//       // mapStyle = "mapbox://styles/joeybbox/clax7xnhe001q16pimaxksay6"
//       //
//       // Streets
//       // mapStyle = "mapbox://styles/mapbox/streets-v9"
//       //
//       // Moonlight
          // mapStyle = "mapbox://styles/joeybbox/claxljjpt000014o8ti099azd"
//       //
//       //
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} placeholder="Explore
        " position="top-left" />
        <NavigationControl position="top-right" />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="top-right"
        />
      </Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
