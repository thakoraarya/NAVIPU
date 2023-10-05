import React from 'react';
import Image from 'next/image';
import { EventData } from '@/src/Components/atoms/Data';

interface QueryPoint {
  queryPointlongitude: number;
  queryPointlatitude: number;
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
  eventAarya: EventData;
  handleEventLocation: (lat:number, long:number) => any;
  // handleQueryPointClick: () => any;

  // handleQueryPointLocation: () => any;
}


const AboutEventItem: React.FC<AboutEventItemProps> = ({
                                                         image, eventName, eventDescription, placeName, date, queryPoint, websiteLink, // handleQueryPointLocation,
                                                         handleEventLocation, eventAarya,
                                                         // handleQueryPointClick
                                                       }: AboutEventItemProps) => {


  return (<section
    className='bg-light-tertiary-container backdrop-blur-sm border-[#00201990] overflow-y-scroll h-[44rem] border-2  w-[20.9rem] flex flex-col p-4 gap-y-6 justify-between rounded-2xl cursor-pointer'>
    {/* svg as a square image holder */}
    {/* event images */}
    <section className='flex w-full items-center gap-x-1 justify-center'>
      {Array.isArray(image) && image.length > 0 ? (
        image.map((img: string, index: number) => (
          <Image
            width={300} // Specify the width here
            height={200} // Specify the height here
            key={index} // Make sure to provide a unique key for each image
            className={`${index < 1 ? 'w-3/6' : 'w-1/6'}  overflow-x-hidden rounded-2xl h-40 object-cover  transition-all  hover:duration-1000  hover:w-full`}
            src={img}
            alt={eventName}
          />
        ))
      ) : (
        <p>No images available</p>
      )}
    </section>
    {/* event name date and description */}
    <div className='flex flex-col gap-y-1 items-start '>
      <div className='w-full flex justify-between items-center'>
        <p className='text-xl text-[#002019]  w-auto text-left capitalize'>
          {eventName}
        </p>
        <p className='text-sm text-[#002019]  w-auto text-right capitalize'>
          {date}
        </p>
      </div>
      <p className='text-base text-[#46492f] text-left '>
        {eventDescription}
      </p>
      <button
        onClick={() => handleEventLocation(eventAarya.placeLocationlatitude,eventAarya.placeLocationlongitude)}
        className=' rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-light-tertiary'>
        <span className='material-icons '>add_location</span>
        <p className='w-full'>{placeName}</p>
      </button>
    </div>
    {/* divider */}
    <hr className='w-full border rounded-full border-[#224E43]' />

    {/* querypoint */}
    {/* querypoint */}
    {Array.isArray(queryPoint) && queryPoint.length > 0 ? (
      queryPoint.map((event: QueryPoint, index: number) => (
        <div className='flex flex-col gap-y-1 items-start' key={index}>
          <div className='w-full flex justify-between'>
            <p className='text-xl text-[#002019] w-full text-left capitalize'>
              {event.queryPointType}
            </p>
            <button onClick={
              () => {
                handleEventLocation(event.queryPointlatitude,event.queryPointlongitude);
              }
            }
                    className='rounded-full w-auto h-auto text-white text-sm items-center p-2 font-medium flex justify-center gap-x-4 capitalize bg-light-tertiary '
            >
              <span className='material-icons '>add_location</span>
            </button>
          </div>
          <p className='text-base text-[#46492f] text-left '>
            {event.queryPointDescription}
          </p>
        </div>
      ))
    ) : (
      <p className='text-base capitalize'>No query points available</p>
    )}

    {/* event weblink  */}
    <button
      className='rounded-full w-full h-auto  text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-light-primary-container border-2 border-[#1a1e00] text-[#1a1e00]'>
      <a target='_blank' href={websiteLink} className='w-full flex justify-center items-center gap-x-2'>
        <span className='material-symbols-outlined'>captive_portal </span>
        <p className='text-base capitalize'> goto page</p>
      </a>
    </button>
  </section>);
};

export default AboutEventItem;
