// eslint-disable-next-line
import React, {useState} from 'react';
import Places from './Places';
import MapView from './MapView';
// import Events from './Events';
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
        <section className='bg-[#fcf9f1] w-screen h-screen flex flex-col gap-2 md:gap-6 overflow-hidden'>

            <div className='w-full h-full flex gap-2 md:gap-6'>
                <Places onCardClick={handleCardClick}/>
                {/* <Places setLatitude={idk} setLongitude={idk} /> */}
                <div className='flex w-full h-full md:flex-col gap-y-2 md:gap-y-6 pb-2 md:pb-6 flex-col-reverse'>
                    {/*<ControllPanel/>*/}
                    <MapView MapLat={Lat} MapLong={Long}/>
                </div>
                {/*<Events />*/}
            </div>
        </section>
    );
};

export default AdminMap;
