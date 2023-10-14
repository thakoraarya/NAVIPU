'use client'
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
      className=' group border-2 border-[#78786a] bg-light-tertiary-container w-fit lg:w-[10rem] h-auto flex lg:flex-col p-4 gap-2 justify-between rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <Image
        width={300} // Specify the width here
        height={200} // Specify the height here
        className='rounded-2xl w-20 h-full lg:w-full lg:h-16 object-cover'
        src={PlaceImage}
        alt='placeholder '
      />
      <div className='w-full h-30 flex flex-col justify-start items-start gap-x-1'>
        <p className=' font-semibold text-xl'>{PlaceName}</p>
        <p className='text-sm whitespace-pre-wrap truncate'>{PlaceDescription}</p>
      </div>
    </section>
  );
};
export default PlaceDetail;