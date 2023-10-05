import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


interface MapViewProps {
  MapLat: number;
  MapLong: number;
}

const MapView: React.FC<MapViewProps> = ({ MapLat, MapLong }) => {
  const mapContainer = useRef(null);
  // @ts-ignore
  const token: string = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  useEffect(() => {
    mapboxgl.accessToken = token;// Replace with your Mapbox access token

    if (mapContainer.current) { // Check if mapContainer is not null
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [MapLong, MapLat],
        zoom: 15,
      });

      // Add a marker to the map
      new mapboxgl.Marker().setLngLat([MapLong, MapLat]).addTo(map);

      // Clean up when the component unmounts
      return () => {
        map.remove();
      };
    }
  }, [MapLat, MapLong]);


  return <div ref={mapContainer}
              style={{ width: '100%', height: '100%', borderRadius: '24px', border: 'black solid ' }} />;
};

export default MapView;
