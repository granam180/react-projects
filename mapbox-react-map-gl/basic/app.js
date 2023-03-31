/* global document */
import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';


const MAPBOX_TOKEN = process.env.MapboxAccessToken; // Set your mapbox token here

function Root() {
  return (
    <Map
      initialViewState={{
        latitude: 34.44,
        longitude: -119.25,
        zoom: 10
      }}
      style={{width: 1080, height: 1080}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-119.23} latitude={34.48} color="brown" />
    </Map>
  );
}

render(<Root />, document.body.appendChild(document.createElement('div')));
