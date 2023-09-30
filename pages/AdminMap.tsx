// eslint-disable-next-line
import React, {useState} from 'react';
import Places from './Places';
import MapView from './MapView';
import Header from "./atoms/Header";
import Events from './Events';
// import ControllPanel from './atoms/ControllPanel';

const center = {
    lat: 22.28854,
    lng: 73.36462
};


const AdminMap: React.FC = () => {
    const [Lat, setLatitude] = useState<number>(center.lat);
    const [Long, setLongitude] = useState<number>(center.lng);

    const handleCardClick = (newLat: number, newLng: number) => {
        // Update the map marker position
        setLatitude(newLat);
        setLongitude(newLng);

    };

    return (
        <section className='bg-[#fcf9f1] w-full h-auto flex flex-col gap-6 overflow-hidden'>
          <Header/>
            <div className='w-full h-auto items-stretch flex gap-6'>
                <Places onCardClick={handleCardClick}/>
                {/*map*/}
                <div className='flex w-full h-auto gap-x-6 pb-2 '>
                    {/*<ControllPanel/>*/}
                    <MapView MapLat={Lat} MapLong={Long}/>
                </div>
                <Events />
            </div>
        </section>
    );
};

export default AdminMap;
