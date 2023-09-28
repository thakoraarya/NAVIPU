import React, { useEffect, useState } from 'react';
import Places from './Places';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker, Popup } from 'react-map-gl';
import Events from './Events';
import ControllPanel from './atoms/ControllPanel';

const center = {
  lat: 22.28854,
  lng: 73.36462
};

const Token = 'pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA';

const AdminMap: React.FC = () => {
  const [Lat, setLatitude] = useState<number>(center.lat);
  const [Long, setLongitude] = useState<number>(center.lng);
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLong, setUserLong] = useState<number | null>(null);
  const [popupInfo, setPopupInfo] = useState<{ lat: number; long: number } | null>(null);
  const [routes, setRoutes] = useState<any[] | null>(null); // Store the routes

  const handleCardClick = (newLat: number, newLng: number) => {
    setLatitude(newLat);
    setLongitude(newLng);
    setPopupInfo(null);
    setRoutes(null); // Clear any existing routes
  };

  const handleMapClick = (event: { lngLat: { lat: number; lng: number } }) => {
    setPopupInfo({
      lat: event.lngLat.lat,
      long: event.lngLat.lng
    });
  };

  const getDirections = async (destinationLat: number, destinationLong: number) => {
    try {
      const response = await fetch(
        `/api/directions?originLat=${Lat}&originLong=${Long}&destinationLat=${destinationLat}&destinationLong=${destinationLong}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Error fetching directions.');
      }
  
      const data = await response.json();
      console.log('Directions API Response:', data);
  
      if (data.routes && data.routes.length > 0) {
        setRoutes(data.routes); // Store the routes
      } else {
        throw new Error('No routes found.');
      }
    } catch (error) {
      console.error('Error getting directions:', error);
    }
  };
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setUserLat(latitude);
        setUserLong(longitude);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <section className='w-screen h-screen gap-2 md:gap-6 overflow-hidden'>
      <div className='w-full h-[100%]'>
        {<Places onCardClick={handleCardClick} />}
        <div className='w-full h-full sticky'>
          <Map
            mapboxAccessToken={Token}
            initialViewState={{
              latitude: Lat,
              longitude: Long,
              zoom: 15,
            }}
            style={{ width: '100%', height: '100%', border: 'black solid ' }}
            mapStyle='mapbox://styles/mapbox/streets-v12'
            onClick={handleMapClick}
          >
            <Marker latitude={Lat} longitude={Long} anchor='center'>
              <span className='text-3xl'>&#128205;</span>
            </Marker>

            {userLat !== null && userLong !== null && (
              <Marker latitude={userLat} longitude={userLong} anchor='center'>
                <span className='text-3xl'>&#128176;</span>
              </Marker>
            )}

            {popupInfo && (
              <Popup
                latitude={popupInfo.lat}
                longitude={popupInfo.long}
                onClose={() => setPopupInfo(null)}
                closeButton={true}
              >
                <div>
                  <p>Location Information</p>
                  <p>Latitude: {popupInfo.lat.toFixed(6)}</p>
                  <p>Longitude: {popupInfo.long.toFixed(6)}</p>
                  <button
                    onClick={() => {
                      // Handle "Get Directions" button click
                      getDirections(popupInfo.lat, popupInfo.long);
                    }}
                  >
                    Get Directions
                  </button>
                </div>
              </Popup>
            )}

            {routes &&
              routes.map((route, index) => (
                <Popup
                  key={index}
                  latitude={route.geometry.coordinates[0][1]}
                  longitude={route.geometry.coordinates[0][0]}
                  closeButton={true}
                >
                  <div>
                    <p>Route {index + 1}</p>
                    <p>Distance: {route.distance.toFixed(2)} meters</p>
                    <p>Duration: {route.duration.toFixed(2)} seconds</p>
                  </div>
                </Popup>
              ))}
          </Map>
        </div>
        {<Events />}
      </div>
    </section>
  );
};

export default AdminMap;
