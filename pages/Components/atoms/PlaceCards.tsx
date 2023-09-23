import React from 'react';

interface PlaceCardsProps {
  PlaceName: string;
  Latitude: number; // Change setLatitude to Latitude
  Longitude: number; // Change setLongitude to Longitude
  onClick: () => void;
}

const PlaceCards: React.FC<PlaceCardsProps> = ({ PlaceName, Latitude, Longitude, onClick }) => {
  return (
    <div className="place-card">
      <h3>{PlaceName}</h3>
      {/* Add any other content for the place card */}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default PlaceCards;
