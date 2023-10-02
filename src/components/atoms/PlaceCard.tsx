import React from 'react';

interface PlaceCardProps {
    PlaceName: string;
    PlaceImage: string;
    Latitude: number; // Change setLatitude to Latitude
    Longitude: number; // Change setLongitude to Longitude
    onClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({PlaceImage, PlaceName, onClick}) => {
    return (
        <section className="group  bg-[#F0EEE5] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col p-2 gap-2 justify-between rounded-2xl cursor-pointer" onClick={onClick}>
            <img
                className="border-2 border-[#1C1C17] rounded-2xl w-full h-16 object-cover"
                src={PlaceImage}
                alt="placeholder "
            />
            <h3>{PlaceName}</h3>
            {/* Add any other content for the place card */}
        </section>
    );
}

export default PlaceCard;
