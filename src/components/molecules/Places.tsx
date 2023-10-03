import React, {useState} from 'react'
import PlaceCard from '@/src/Components/atoms/PlaceCard';
import {PlaceData, places} from '@/src/Components/atoms/Data';
import PlaceDetail from "@/src/Components/atoms/PlaceDetail";

interface PlacesProps {
    onCardClick: (latitude: number, longitude: number) => void;
}

const Places: React.FC<PlacesProps> = ({onCardClick}) => {
    const [selectedPlace, setSelectedPlace] = useState<PlaceData | null>(null);


    const handleCardClick = (place: PlaceData) => {
        //         // Pass the clicked place's coordinates to the parent component
        onCardClick(place.Latitude, place.Longitude);
        setSelectedPlace(place);
    };


    return (
        <section
            className='overflow-hidden flex flex-col items-center gap-2 min-w-fit min-h-full rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%]'>
            <section className="font-mono h-auto items-center font-medium uppercase gap-x-4 text-2xl w-min flex">
                {selectedPlace && (<span
                        onClick={() => setSelectedPlace(null)}
                        className="material-symbols-outlined cursor-pointer font-semibold text-xl w-fit"
                    >
            arrow_back
          </span>)}
                Nearby
            </section>
            <section
                className='h-full scroll-smooth rounded-t-xl w-full flex flex-col gap-4 overflow-y-scroll'>
                {selectedPlace ? <PlaceDetail PlaceName={selectedPlace.PlaceName}
                                              PlaceDescription={selectedPlace.PlaceDescription}
                                              PlaceImage={selectedPlace.PlaceImage}
                /> : (places.map((data) => (<PlaceCard
                            key={data.id}
                            PlaceImage={data.PlaceImage}
                            PlaceName={data.PlaceName}
                            Latitude={data.Latitude}
                            Longitude={data.Longitude}
                            onClick={() => handleCardClick(data)}
                        />)))}
            </section>
        </section>);
}

export default Places;
