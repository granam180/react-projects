import * as React from 'react';
import {render} from 'react-dom';
import Map from 'react-map-gl';

import GeocoderControl from './geocoder-control';
import ControlPanel from './control-panel';

// eslint-disable-next-line
//  const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9leWJib3giLCJhIjoiY2wwOGd0OGxwMDNheDNjcW02MGJ4czEwNSJ9.jtxX-Vu-w3w4dQ4ax5pAdA'; // Set your mapbox token here
const TOKEN = process.env.MapboxAccessToken;

export default function App() {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -75.1637382,
          latitude: 39.9518646,
          zoom: 13
        }}
        // initialViewState={{
        //   longitude: -119.2561
        //   latitude: 34.448
        //   zoom: 13
        // }}
//       // Decimal
         mapStyle = "mapbox://styles/joeybbox/clarefc99001m14qxa1s1zqpv"
//       //
//       // Blueprint
//       mapStyle: "mapbox://styles/joeybbox/claufvkw6000u14rw1nzkqjoy"
//       //
//       // Mineral
//       // mapStyle: "mapbox://styles/joeybbox/clareeejy001y14ljrwcstfwt"
//       //
//       // Cali Terrain
//       // mapStyle: "mapbox://styles/joeybbox/clax7xnhe001q16pimaxksay6"
//       //
//       // Streets
//       // mapStyle: "mapbox://styles/mapbox/streets-v9"
//       //
//       // Moonlight
//       // mapStyle: "mapbox://styles/joeybbox/claxljjpt000014o8ti099azd"
//       //
//       //
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
