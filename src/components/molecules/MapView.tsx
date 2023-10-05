import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

interface MapViewProps {
  MapLat: number;
  MapLong: number;
}

const MapView: React.FC<MapViewProps> = ({ MapLat, MapLong }) => {
  const mapContainer = useRef(null);
  const token: string | undefined = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const mapRef = useRef<mapboxgl.Map | null>(null); // Reference to the map instance

  useEffect(() => {
    mapboxgl.accessToken = token || ''; // Replace with your Mapbox access token

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [MapLong, MapLat],
        zoom: 15,
        bearing: 0,
        pitch: 0,
        minZoom:15,
      });

      // Save the map instance in the ref
      mapRef.current = map;

      // Add a marker to the map
      new mapboxgl.Marker().setLngLat([MapLong, MapLat]).addTo(map);

      // Clean up when the component unmounts
      return () => {
        map.remove();
      };
    }
  }, [MapLat, MapLong, token]);

  // Automatically fly to the new location when MapLat or MapLong change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [MapLong, MapLat],
        duration: 3000, // Updated duration for a very slow animation

      });
    }
  }, [MapLat, MapLong]);

  return <div ref={mapContainer} className='w-full h-full lg:rounded-2xl' />;
};

export default MapView;
