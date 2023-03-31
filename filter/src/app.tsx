import * as React from 'react';
import {useState, useMemo, useCallback} from 'react';
import {render} from 'react-dom';
import Map, {Popup, Source, Layer} from 'react-map-gl';
import ControlPanel from './control-panel';

import {countiesLayer, highlightLayer} from './map-style';

const MAPBOX_TOKEN = process.env.MapboxAccessToken; // Set your mapbox token here

export default function App() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback(event => {
    const county = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties.COUNTY
    });
    console.log(county)
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';
  const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);
  //console.log(filter);

  return (
    <>
      <Map
        initialViewState={{
          // const [lat, setLat] = useState(39.1632);
          // const [lng, setLng] = useState(-75.5131);
          // const [zoom, setZoom] = useState(14);
          latitude: 39.16,
          longitude: -75.51,
          zoom: 4,
          projection: 'lambertConformalConic' // starting projection
        }}
        minZoom={2}
        mapStyle="mapbox://styles/joeybbox/clarefc99001m14qxa1s1zqpv"
        mapboxAccessToken={MAPBOX_TOKEN}
        onMouseMove={onHover}
        interactiveLayerIds={['counties']}
      >
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...countiesLayer} />
          <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
        </Source>
        {selectedCounty && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            offset={[0, -10]}
            closeButton={false}
            className="county-info"
          >
            {selectedCounty}
          </Popup>
        )}
      </Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
