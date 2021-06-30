import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

function useMaps(mapRef) {
  const [map, setMap] = useState(null);
  const Amsterdam = [52.38333, 4.9];
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: Amsterdam[0],
          lng: Amsterdam[1],
        },
        zoom: 10,
        zoomControl: true,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map]);

  return map;
}

function Maps({ points }) {
  const mapRef = useRef(null);
  const map = useMaps(mapRef);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach(({ city: { location: { latitude, longitude } } }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

Maps.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  points: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    }),
  ),
};

export default Maps;
