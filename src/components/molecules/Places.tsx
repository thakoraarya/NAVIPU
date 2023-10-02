import React, {useState} from 'react'
import PlaceCard from '../atoms/PlaceCard';
import {PlaceData, places} from '../atoms/Data';
import PlaceDetail from "../atoms/PlaceDetail";

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


    return (<section
            className='overflow-hidden flex flex-col items-center gap-2 min-w-fit h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%] max-h-[800px]'>
            {selectedPlace && (<span
                    onClick={() => setSelectedPlace(null)}
                    className="material-symbols-outlined cursor-pointer font-semibold text-xl w-fit"
                >
            arrow_back
          </span>)}
            <section
                className='h-auto scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>
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
