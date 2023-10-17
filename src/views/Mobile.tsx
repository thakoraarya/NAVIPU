'use client';
import React, { useState } from 'react';
import MapView from '@/src/Components/molecules/MapView';
import { PlaceData, places } from '@/src/Components/atoms/Data';
import Events from '@/src/Components/molecules/Events';
import Places from '@/src/Components/molecules/Places';

const center = {
  lat: 22.28854, lng: 73.36462,
};

const Mobile: React.FC = () => {
  const [Lat, setLatitude] = useState<number>(center.lat);
  const [Long, setLongitude] = useState<number>(center.lng);
  const [selectedChip, setSelectedChip] = useState<PlaceData | null>(null);
  const [selectedTab, setSelectedTab] = useState<'Places' | 'Events' | null>(null);

  // Calculate distances and sort places
  const sortedPlaces = [...places].sort((placeA, placeB) => {
    const distanceA = Math.sqrt(Math.pow(placeA.Latitude - Lat, 2) + Math.pow(placeA.Longitude - Long, 2));
    const distanceB = Math.sqrt(Math.pow(placeB.Latitude - Lat, 2) + Math.pow(placeB.Longitude - Long, 2));
    return distanceA - distanceB;
  });

  const handleCardClick = (newLat: number, newLng: number) => {
    setLatitude(newLat);
    setLongitude(newLng);
    setSelectedChip(null); // Deselect the chip when a button is clicked
  };

  const handleChipClick = (chip: PlaceData) => {
    setSelectedChip(chip); // Select the chip
    setLatitude(chip.Latitude);
    setLongitude(chip.Longitude);
  };

  const handleTabClick = (tab: 'Places' | 'Events') => {
    if (selectedTab === tab) {
      // If the same tab is clicked again, close it
      setSelectedTab(null);
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <section className='w-full min-h-full flex flex-col gap-6 overflow-hidden'>
      {/* Nearest places */}
      <section className='px-4 absolute h-auto scroll-smooth w-full flex gap-x-3 overflow-x-scroll z-20 mt-5'>
        {sortedPlaces.map((data: PlaceData) => (<button
          onClick={() => {
            handleCardClick(data.Latitude, data.Longitude);
            handleChipClick(data); // Select the chip when the button is clicked
          }}
          className={`min-w-[5rem] w-full rounded-3xl p-2 transition duration-300 cursor-pointer ${selectedChip === data ? 'bg-light-primary-container' : 'backdrop-blur-md backdrop-filter bg-light-surface-container/20'}`}
          key={data.PlaceName}
        >
          {data.PlaceName}
        </button>))}
      </section>
      {/* container for switch and components */}
      <section
        className={`absolute bottom-0  transition duration-500 ease-out z-[10] w-full px-4 gap-y-4 flex flex-col justify-end ${selectedTab ? (selectedTab === 'Events' ? 'h-3/6' : 'h-2/6') : 'h-min mb-4'}`}>
        {/*switch*/}
        <div
          className='backdrop-blur-md backdrop-filter bg-light-surface-container/20 flex w-full h-min justify-between p-2 border-2 border-light-outline rounded-full'>
          <button
            onClick={() => handleTabClick('Places')}
            className={`w-full  rounded-full p-2 h-min text-base transition duration-8000 ${selectedTab === 'Places' ? 'bg-light-primary-container' : 'bg-opacity-40'} cursor-pointer`}
          >
            Places
          </button>
          <button
            onClick={() => handleTabClick('Events')}
            className={`w-full  rounded-full p-2 h-min text-base transition duration-300  ${selectedTab === 'Events' ? 'bg-light-primary-container' : 'bg-opacity-20'} cursor-pointer`}
          >
            Events
          </button>
        </div>
        {/* Conditional rendering based on selectedTab */}
        {selectedTab === 'Events' ? (<Events onEventClick={handleCardClick} />) : selectedTab === 'Places' ? (
          <Places onCardClick={handleCardClick} />) : null}
      </section>
      <div className='absolute w-full h-full z-0'>
        <MapView MapLat={Lat} MapLong={Long} />
      </div>
    </section>);
};

export default Mobile;