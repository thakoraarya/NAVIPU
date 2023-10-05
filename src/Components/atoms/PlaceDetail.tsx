import React from 'react';
import Image from 'next/image';

interface PlaceDetailProps {
  PlaceName: string;
  PlaceImage: string;
  PlaceDescription: string;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ PlaceName, PlaceImage, PlaceDescription }) => {
  return (
    <section
      className=' group  border-2 border-[#78786a] bg-light-tertiary-container  w-[10rem] h-auto flex flex-col p-4 gap-2 justify-between rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <Image
        width={300} // Specify the width here
        height={200} // Specify the height here
        className='rounded-md md:rounded-2xl w-full h-16 object-cover'
        src={PlaceImage}
        alt='placeholder '
      />
      <p className=' font-semibold text-xl'>{PlaceName}</p>
      <p className='text-sm text-left'>{PlaceDescription}</p>
    </section>
  );
};
export default PlaceDetail;
