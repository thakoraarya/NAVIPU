"use client"
import React, { useState } from 'react';
import MapView from '@/src/Components/molecules/MapView';
import { PlaceData, places } from '@/src/Components/atoms/Data';
import Events from '@/src/Components/molecules/Events';
import Places from '@/src/Components/molecules/Places';

const center = {
  lat: 22.28854,
  lng: 73.36462
};
const Mobile: React.FC = () => {
  const [Lat, setLatitude] = useState<number>(center.lat);
  const [Long, setLongitude] = useState<number>(center.lng);
  const [selectedTab, setSelectedTab] = useState<'Places' | 'Events'>('Places');

  const handleCardClick = (newLat: number, newLng: number) => {
    setLatitude(newLat);
    setLongitude(newLng);
  };

  const handleTabClick = (tab: 'Places' | 'Events') => {
    setSelectedTab(tab);
  };
    return (
      <section className='w-full h-auto flex flex-col gap-6 overflow-hidden'>
        <section className='absolute h-auto scroll-smooth  w-full flex gap-x-10 overflow-x-scroll z-20 mt-5'>
          {places.map((data: PlaceData) => (
            <button
              className='min-w-[100px] w-full border-2 border-white rounded-3xl p-2
              bg-opacity-30 backdrop-blur-md backdrop-filter hover:bg-opacity-40
              hover:bg-[#CAF234] transition duration-300'
              key={data.PlaceName}
            >
              {data.PlaceName}
            </button>
          ))}
        </section>
        <div className='w-full h-auto items-stretch flex gap-6'>
          <div className='md:relative absolute z-10 w-screen top-[50%] h-[20%] md:h-screen overflow-scroll'></div>

          <div className='md:relative absolute z-10 w-screen top-[80%] h-[20%] md:h-screen overflow-scroll p-1'>
            <div className='flex w-full justify-center gap-2 p-2 border-2 border-white rounded-3xl overflow-scroll'>
              <button
                className={`w-full border-2 border-white rounded-3xl p-2 
                bg-opacity-30 backdrop-blur-md backdrop-filter hover:bg-opacity-40 
                hover:bg-[#CAF234] transition duration-300 ${
                  selectedTab === 'Places' ? 'bg-[#CAF234]' : 'bg-opacity-20'
                }`}
                onClick={() => handleTabClick('Places')}
              >
                Places
              </button>
              <button
                className={`w-full border-2 border-white rounded-3xl p-2 
                bg-opacity-30 backdrop-blur-md backdrop-filter hover:bg-opacity-40 
                hover:bg-[#CAF234] transition duration-300 ${
                  selectedTab === 'Events' ? 'bg-[#CAF234]' : 'bg-opacity-20'
                }`}
                onClick={() => handleTabClick('Events')}
              >
                Events
              </button>
            </div>
            {selectedTab === 'Events' ? <Events /> : <Places onCardClick={handleCardClick} />}
          </div>

          <div className='md:relative absolute w-screen h-screen gap-x-6 z-0'>
            <MapView MapLat={Lat} MapLong={Long} />
          </div>
        </div>
      </section>
    );
};

export default Mobile;
