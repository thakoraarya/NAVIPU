import React from 'react';
import Image from 'next/image';


interface QueryPoint {
  queryPointType: string;
  queryPointDescription: string;
}

interface AboutEventItemProps {
  image: any;
  eventName: string;
  eventDescription: string;
  placeName: string;
  date: string;
  queryPoint: QueryPoint[];
  websiteLink: string;
}

const AboutEventItem: React.FC<AboutEventItemProps> = ({
                                                         image,
                                                         eventName,
                                                         eventDescription,
                                                         placeName,
                                                         date,
                                                         queryPoint,
                                                         websiteLink,
                                                       }: AboutEventItemProps) => {
  return (
    <section
      className='bg-[#beecdd90] backdrop-blur-sm border-[#00201990] overflow-y-scroll h-[44rem] border-2 active:border-2 w-[20.9rem] flex flex-col p-4 gap-y-6 justify-between rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      {/* event images */}
      <section className='flex w-full items-center gap-2 justify-start'>
        {image.map((img: string, index: number): any => (
          <Image
            width={300} // Specify the width here
            height={200} // Specify the height here
            key={index} // Make sure to provide a unique key for each image
            className={`${
              index < 3 ? (index < 2 ? 'w-[30%]' : 'w-[20%]') : 'w-[10%]'
            }  overflow-x-hidden rounded-xl h-40 object-cover border-2 border-[#46492f] transition-all hover:scale-x-110 hover:duration-500  hover:w-[40%]`}
            src={img}
            alt={eventName}
          />
        ))}

      </section>
      {/* event name date and description */}
      <div className='flex flex-col gap-y-1 items-start'>
        <div className='w-full flex justify-between items-center'>
          <p className='text-xl text-[#002019] -active:text-white w-auto text-left capitalize'>
            {eventName}
          </p>
          <p className='text-sm text-[#002019] -active:text-white w-auto text-right capitalize'>
            {date}
          </p>
        </div>
        <p className='text-base text-[#46492f] text-left -active:text-white'>
          {eventDescription}
        </p>
        <button
          className=' rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] '>
          <span className='material-icons '>add_location</span>
          <p className='w-full'>{placeName}</p>
        </button>
      </div>
      {/* divider */}
      <hr className='w-full border rounded-full border-[#224E43]' />

      {/* querypoint */}
      {queryPoint.map((event: QueryPoint, index: number) => (
        <div className='flex flex-col gap-y-1 items-start' key={index}>
          <div className='w-full flex justify-between'>
            <p className='text-xl text-[#002019] active:text-white w-full text-left capitalize'>
              {event.queryPointType}
            </p>
            <button
              className='rounded-full w-auto h-auto text-white text-sm items-center p-2 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] '>
              <span className='material-icons '>add_location</span>
            </button>
          </div>
          <p className='text-base text-[#46492f] text-left -active:text-white'>
            {event.queryPointDescription}
          </p>
        </div>
      ))}
      {/* event weblink  */}
      <button
        className='rounded-full w-full h-auto  text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#ddeb78] border-2 border-[#1a1e00] text-[#1a1e00]'>
        <span className='material-symbols-outlined'>captive_portal</span>
        {websiteLink}
      </button>
    </section>
  );
};

export default AboutEventItem;
