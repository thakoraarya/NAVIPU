'use client'
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
             className='lg:w-44 h-auto bg-light-surface-container rounded-2xl p-2 flex lg:flex-col lg:gap-y-2 gap-4 items-start cursor-pointer'>
      <Image
        width={300} // Specify the width here
        height={300} // Specify the height here
        className='w-full h-auto rounded-lg border-2 border-[#46492F]'
        src={image[0]}
        alt={eventName}
      />
      <div className='flex flex-col w-full h-full justify-between'>
        <h2 className='text-xl text-[#1C1C17]' >{eventName}</h2>
        <p className='text-base text-left text-[#46492F]'>{eventDescription}</p>
      </div>
    </section>


  );
};

export default EventsCard;