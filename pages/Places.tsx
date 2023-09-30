import React from 'react';
import PlaceCard from './atoms/PlaceCard';
import {PlaceData, places} from './atoms/Data';

interface PlacesProps {
    onCardClick: (latitude: number, longitude: number) => void;
}

const Places: React.FC<PlacesProps> = ({onCardClick}) => {
    const handleCardClick = (place: PlaceData) => {
        //         // Pass the clicked place's coordinates to the parent component
        onCardClick(place.Latitude, place.Longitude);
    };

    return (
        <div
            className='overflow-hidden flex flex-col items-center gap-2 min-w-fit h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%] max-h-[800px]'>
            <p className='font-mono font-medium uppercase text-2xl flex items-center'> Places</p>
            <section
                className='h-auto scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>
                {places.map((data: PlaceData) => (
                    <PlaceCard
                        key={data.id}
                        PlaceImage={data.PlaceImage}
                        PlaceName={data.PlaceName}
                        Latitude={data.Latitude}
                        Longitude={data.Longitude}
                        onClick={() => handleCardClick(data)}
                    />
                ))}
            </section>
        </div>
    );
}

export default Places;
