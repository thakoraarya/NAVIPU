import React from 'react';
import Image from 'next/image';

interface EventCardProps {
  image: string[];
  eventName: string;
  eventDescription: string;
  onClick: any;
}

const EventsCard: React.FC<EventCardProps> = ({ image, eventName, eventDescription, onClick }) => {
  return (
    <section onClick={onClick}
             className={`md:w-44 w-fit h-auto bg-[#E4E3D2] rounded-2xl p-2 flex md:flex-col md:gap-y-2 gap-x-2 items-start cursor-pointer`}>
      <Image
        width={300} // Specify the width here
        height={200} // Specify the height here
        className='lg:w-full w-32 h-full rounded-lg border-2 border-[#46492F]'
        src={image[0]}
        alt={eventName}
      />
      <div>
        <h2 className='text-xl text-[#1C1C17]'>{eventName}</h2>
        <p className='text-base text-left text-[#46492F]'>{eventDescription}</p>
      </div>
    </section>
  );
};

export default EventsCard;