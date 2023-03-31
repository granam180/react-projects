import * as React from 'react';

import {useCallback, useState, useEffect} from 'react';
import {useMap} from 'react-map-gl';

export default function Controls() {
  const {mymap} = useMap();
  const [inputValue, setInputValue] = useState('');
  // const [geoValue, setGeoValue] = useState('');
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (!mymap) {
      return undefined;
    }

    const onMove = () => {
      const {lng, lat} = mymap.getCenter();
      setInputValue(`${lng.toFixed(3)}, ${lat.toFixed(3)}`);
      setError(false);
    };
    mymap.on('move', onMove);
    onMove();

    return () => {
      mymap.off('move', onMove);
    };
  }, [mymap]);

  const onChange = useCallback(evt => {
    setInputValue(evt.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    const [lng, lat] = inputValue.split(',').map(Number);
    if (Math.abs(lng) <= 180 && Math.abs(lat) <= 85) {
      mymap.easeTo({
        center: [lng, lat],
        duration: 1000
      });
    } else {
      setError(true);
    }

  }, [mymap, inputValue]);


  //
  // TRYING MY BEST TO ADD GEOCODER SEARCH CAPABILITY... maybe later
  //
//  useEffect(() => {
//    if (mymap.current) return; // initialize map only once
  // const geoCoder = useCallback(() => {
  //     mymap.current = new MapboxGeocoder({
  //       accessToken: MAPBOX_TOKEN.accessToken,
  //       MAPBOX_TOKEN: MAPBOX_TOKEN
  //     })}, [mymap]);
    


  return (

    <div style={{padding: 12, fontFamily: 'sans-serif'}}>
      {/* search by latitude/longitude */}
      <span>MAP CENTER: </span>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        style={{color: hasError ? 'red' : 'black'}}
      />
      {/* <button onClick={onSubmit} style={{ marginLeft: "5px" }}>GO</button> */}

      {/* search by GEOLOCATION */}
      {/* <div style={{display: 'inline-block', padding: 6, fontFamily: 'sans-serif'}}>
      <span>GEOLOCATION: </span>
      <input
        type="text"
        value={geoCoder}
        onChange={geoCoder}
        style={{color: hasError ? 'red' : 'black'}}
      />
      </div> */}
    </div>
  );

}
