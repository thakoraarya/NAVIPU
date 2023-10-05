import React, { useState } from 'react';
import EventsCard from '@/src/Components/atoms/EventsCard';
import AboutEventItem from '@/src/Components/atoms/AboutEventItem';
import { EventData, events } from '@/src/Components/atoms/Data';

interface EventsProps {
  onEventClick: (latitude: number, longitude: number) => void,
}


const Events: React.FC<EventsProps> = ({ onEventClick }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const handleCardClick = (event: EventData): void => {
    // onEventClick(event.placeLocationlatitude, event.placeLocationlongitude);
    setSelectedEvent(event);
  };
  const handleEventLocationClick = (Latitude: number, Longitude: number): any => {
    onEventClick(Latitude, Longitude);
  };


  return (
    <section
      className='min-w-fit h-auto rounded-tl-3xl overflow-y-scroll border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-6 custom-cursor-default-hover'
    >
      <div className='font-mono w-full font-medium uppercase text-2xl flex items-center gap-x-4 '>
        {selectedEvent && (
          <span
            onClick={() => setSelectedEvent(null)}
            className='material-symbols-outlined cursor-pointer font-semibold text-xl w-fit'
          >
        arrow_back
      </span>
        )}
        <div className='w-full flex justify-center gap-x-4 '>
      <span className='material-symbols-outlined font-semibold text-2xl w-auto'>
        celebration
      </span>
          <span
            onClick={() => console.log('this is a function')}
            className='w-auto font-mono font-medium uppercase text-2xl'
          >
        Events
      </span>
        </div>
      </div>

      <div className='max-h-full h-auto overflow-y-scroll rounded-t-xl w-full flex flex-col gap-4'>
        {selectedEvent ? (
          <AboutEventItem
            image={selectedEvent.image}
            eventName={selectedEvent.eventName}
            eventDescription={selectedEvent.eventDescription}
            placeName={selectedEvent.placeName}
            date={selectedEvent.date}
            queryPoint={selectedEvent.queryPoints}
            websiteLink={selectedEvent.websiteLink}
            handleEventLocation={handleEventLocationClick}
            eventAarya={selectedEvent}
          />
        ) : (
          events.map((eventdata) => (
            <EventsCard
              key={eventdata.id}
              image={eventdata.image}
              eventName={eventdata.eventName}
              eventDescription={eventdata.eventDescription}
              onClick={() => handleCardClick(eventdata)}
            />
          ))
        )}

      </div>
    </section>
  );
};

export default Events;