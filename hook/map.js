import * as React from 'react';
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9leWJib3giLCJhIjoiY2wwOGd0OGxwMDNheDNjcW02MGJ4czEwNSJ9.jtxX-Vu-w3w4dQ4ax5pAdA'; // Set your mapbox token here

export default function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        latitude: 34.44,
        longitude: -119.25,
        zoom: 12
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/joeybbox/clarefc99001m14qxa1s1zqpv"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}
