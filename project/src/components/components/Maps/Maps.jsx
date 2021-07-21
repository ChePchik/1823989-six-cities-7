import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useMaps from '../../../hooks/useMaps';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Maps({ points }) {
  const mapRef = useRef(null);
  const map = useMaps(mapRef);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      markers.addTo(map);
      points.forEach(({ city: { location: { latitude, longitude } } }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(markers);
      });
    }
    return () => {
      markers.clearLayers();
    };
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
