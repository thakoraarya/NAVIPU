'use client';
import React, { useState } from 'react';
import Places from '@/src/Components/molecules/Places';
import MapView from '@/src/Components/molecules/MapView';
import Header from '@/src/Components/molecules/Header';
import Events from '@/src/Components/molecules/Events';

const center = {
  lat: 22.28854,
  lng: 73.36462,
};

const Desktop: React.FC = () => {
  const [Lat, setLatitude] = useState<number>(center.lat);
  const [Long, setLongitude] = useState<number>(center.lng);

  const handleCardClick = (newLat: number, newLng: number): any => {
    // Update the map marker position
    setLatitude(newLat);
    setLongitude(newLng);

  };

  return (
    <section
      className='relative bg-light-surface w-full h-screen flex flex-col justify-between gap-6 overflow-hidden overflow-y-hidden'>
      <Header />
      <section className='w-full h-5/6 items-stretch flex gap-6'>
        <Places onCardClick={handleCardClick} />
        {/*map*/}
        <section className='flex w-full h-[96%] gap-x-6 rounded-3xl border-2 border-[#78786a]'>
          <MapView MapLat={Lat} MapLong={Long} />
        </section>
        <Events onEventClick={handleCardClick} />
      </section>
    </section>
  );
};

export default Desktop;