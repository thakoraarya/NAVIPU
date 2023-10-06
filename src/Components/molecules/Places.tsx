import React, { useState } from 'react';
import PlaceCard from '@/src/Components/atoms/PlaceCard';
import { PlaceData, places } from '@/src/Components/atoms/Data';
import PlaceDetail from '@/src/Components/atoms/PlaceDetail';

interface PlacesProps {
  onCardClick: (latitude: number, longitude: number) => void;
}

const Places: React.FC<PlacesProps> = ({ onCardClick }) => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceData | null>(null);


  const handleCardClick = (place: PlaceData) => {
    //         // Pass the clicked place's coordinates to the parent component
    onCardClick(place.Latitude, place.Longitude);
    setSelectedPlace(place);
  };


  return (
    <section
      className='overflow-hidden flex flex-col items-center gap-y-4 min-w-fit min-h-full px-4 py-5 lg:p-[1.7%] border-[#78786a] bg-light-surface-container rounded-t-3xl border-b-0 border-2 lg:border-l-0 lg:rounded-tl-none lg:backdrop-blur-none  lg:bg-none backdrop-blur-md backdrop-filter bg-light-surface-container/20'>
      {/*className='overflow-hidden flex flex-col items-center gap-y-4 min-w-fit min-h-full lg:rounded-tr-3xl rounded-t-3xl lg:border-l-0 border-b-0 bg-[#fcf9f1] border-[#78786a] border-2 lg:border-r-0'>*/}
      <section
        className='relative font-mono h-auto items-center font-medium uppercase gap-x-4 text-2xl w-full flex'>
        {selectedPlace && (<span
          onClick={() => setSelectedPlace(null)}
          className='material-symbols-outlined cursor-pointer font-semibold text-2xl w-fit absolute left-0'
        >
            arrow_back
          </span>)}
        <p className='w-full text-center'>
          Nearby
        </p>
      </section>
      <section
        className={`h-min lg:h-full scroll-smooth rounded-t-xl w-full flex flex-col justify-between lg:justify-start  gap-4 overflow-y-scroll ${selectedPlace && 'min-h-fit max-h-min'}`}>
        {selectedPlace ? <PlaceDetail PlaceName={selectedPlace.PlaceName}
                                      PlaceDescription={selectedPlace.PlaceDescription}
                                      PlaceImage={selectedPlace.PlaceImage}
        /> : (places.map((data) => (<PlaceCard
          key={data.id}
          PlaceImage={data.PlaceImage}
          PlaceName={data.PlaceName}
          Latitude={data.Latitude}
          Longitude={data.Longitude}
          onPlaceClick={() => handleCardClick(data)}
        />)))}
      </section>
    </section>);
};

export default Places;
