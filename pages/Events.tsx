import React, { useState } from 'react';
import EventsCard from './atoms/EventsCard';
import AboutEventItem from './atoms/AboutEventItem';
import {events} from './atoms/Data'
interface EventData {
    id: number;
    image: string;
    eventName: string;
    eventDescription: string;
    placeName: string;
    date: string;
    queryPoints: any[]; // You should define the correct type here
    websiteLink: string;
}

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    const handleCardClick = (event: EventData): void => {
        // Pass the clicked event to the parent component
        console.log('event', event);
        setSelectedEvent(event);
    };

    return (
        <div className="min-w-fit h-auto rounded-tl-3xl overflow-y-scroll border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-6 custom-cursor-default-hover">
            <div className="font-mono w-full font-medium uppercase text-2xl flex items-center gap-x-4 ">
                {selectedEvent && (
                    <span
                        onClick={() => setSelectedEvent(null)}
                        className="material-symbols-outlined cursor-pointer font-semibold text-xl w-fit"
                    >
            arrow_back
          </span>
                )}
                <div className="w-full flex justify-center gap-x-4 ">
          <span className="material-symbols-outlined font-semibold text-2xl w-auto">
            celebration
          </span>
                    <span className="w-auto font-mono font-medium uppercase text-2xl">
            Events
          </span>
                </div>
            </div>


            {selectedEvent ? (
                <AboutEventItem
                    image={selectedEvent.image}
                    eventName={selectedEvent.eventName}
                    eventDescription={selectedEvent.eventDescription}
                    placeName={selectedEvent.placeName}
                    date={selectedEvent.date}
                    queryPoint={selectedEvent.queryPoints}
                    websiteLink={selectedEvent.websiteLink}
                />
            ) : (
                events.map((eventdata:any):any => (
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
    );
};

export default Events;
