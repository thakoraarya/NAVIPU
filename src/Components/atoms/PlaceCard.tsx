import React from 'react';
import Image from 'next/image';

interface PlaceCardProps {
  PlaceName: string;
  PlaceImage: string;
  Latitude: number; // Change setLatitude to Latitude
  Longitude: number; // Change setLongitude to Longitude
  onPlaceClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ PlaceImage, PlaceName, onPlaceClick }) => {
  return (
    <section
      className=' group bg-light-surface-container group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col p-2 gap-2 justify-between rounded-2xl cursor-pointer'
      onClick={onPlaceClick}>
      <Image
        width={300} // Specify the width here
        height={200} // Specify the height here
        className='border-2 border-[#1C1C17] rounded-2xl w-full h-16 object-cover'
        src={PlaceImage}
        alt='placeholder '
      />
      <h3>{PlaceName}</h3>
      {/* Add any other content for the place card */}
    </section>
  );
};

export default PlaceCard;
