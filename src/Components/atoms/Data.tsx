'use client'
export interface PlaceData {
  id: number;
  PlaceName: string;
  PlaceDescription: string;
  PlaceImage: string;
  Latitude: number;
  Longitude: number;
}

export const places: PlaceData[] = [{
  id: 0, PlaceName: 'PIET', PlaceDescription: 'Parul Institute of Engineering and Technology, is an Institute inside Parul University located at the Administrative Block and N-Block.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.288767, Longitude: 73.363816,
}, {
  id: 1, PlaceName: 'PIT', PlaceDescription: ' Parul Institute of Technology, is an Institute inside Parul University located at the other side of Main Campus.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.286235, Longitude: 73.364526,
}, {
  id: 2, PlaceName: 'PPI', PlaceDescription: ' Parul Polytechnic Institute, is an Institute inside Parul University. You can locate the institute by turning right from Shree Sai Temple towards the end of the lane.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.290872, Longitude: 73.366111,
}, {
  id: 3, PlaceName: 'DS', PlaceDescription: 'Parul Institute of Engineering and Technology Diploma Studies, is an Institute inside Parul University located at the Administrative Block towards the right hand side wing.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.289611, Longitude: 73.36388,
}, {
  id: 4, PlaceName: 'PIA', PlaceDescription: 'Parul Institue of Ayurveda, is an Institute inside Parul University, located on the right hand side from the back entrance of Administrative Block.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.289155, Longitude: 73.363381,
}, {
  id: 5, PlaceName: 'PIP', PlaceDescription: 'Parul Institue of Pharmacy, is an Institute inside Parul University, located just near the Entrance Gate towards the right.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.288021, Longitude: 73.364939,
}, {
  id: 6, PlaceName: 'JNHMC', PlaceDescription: 'Jawaharlal Nehru Homeopathic Medical College, is an Institute inside Parul University. It is the first institute that comes up while turning right from Shree Sai Temple. ', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.290665, Longitude: 73.36553,
}, {
  id: 7, PlaceName: 'PID', PlaceDescription: 'Parul Institute of Design, is an Institute inside Parul University, located at the far end of the campus.', PlaceImage: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', Latitude: 22.294705, Longitude: 73.364442,
}];

// Define the Event interface
export interface EventData {
  id: number;
  image: string[];
  eventName: string;
  eventDescription: string;
  placeName: string;
  date: string;
  placeLocationlatitude: number;
  placeLocationlongitude: number;
  queryPoints: QueryPoint[];
  websiteLink: string;
}

// Define the QueryPoint interface
export interface QueryPoint {
  id: number;
  queryPointType: string;
  queryPointDescription: string;
  queryPointlatitude: number;
  queryPointlongitude: number;
}

export const events: EventData[] = [
  {
    id: 0, image: ['https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png'], eventName: 'Dhoom Festival', eventDescription: 'Dhoom Festival is the Annual Festival Celebrated in Parul University.', placeName: 'Parul University Campus', date: '2023-09-15', placeLocationlatitude: 40.6643, placeLocationlongitude: -73.9385, queryPoints: [{
      id: 0, queryPointType: 'Main Entrance', queryPointDescription: 'The main entrance to the event venue.', queryPointlatitude: 22.2906, queryPointlongitude: 73.1622,
    }, {
      id: 1, queryPointType: 'Auditorium', queryPointDescription: 'The event will take place in the university\'s auditorium.', queryPointlatitude: 22.291, queryPointlongitude: 73.1628,
    }, {
      id: 1, queryPointType: 'Auditorium', queryPointDescription: 'The event will take place in the university\'s auditorium.', queryPointlatitude: 22.291, queryPointlongitude: 73.1628,
    }], websiteLink: 'https://example.com/event1',
  },
  { id: 1, image: ['https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png'], eventName: 'TechFest', eventDescription: 'TechFest is the Event held to showcase the Innovative minds of Parul University.', placeName: 'Parul University Grounds', date: '2023-10-20',

    placeLocationlatitude: 22.2882, placeLocationlongitude: 73.1606,

    queryPoints: [{
      id: 0, queryPointType: 'Event Stage', queryPointDescription: 'The main stage of the event.', queryPointlatitude: 22.2882, queryPointlongitude: 73.1606,
    }, {
      id: 1, queryPointType: 'Food Court', queryPointDescription: 'A variety of food options available here.', queryPointlatitude: 22.2875, queryPointlongitude: 73.1615,
    }], websiteLink: 'https://example.com/event2',
  },
  {id: 2, image: ['https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png', 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png'], eventName: 'Parul Navratri Festival', eventDescription: 'Come Join the Navratri Festival in Parul University!', placeName: 'Parul University Grounds', date: '2023-10-15 to 2023-10-24',

    placeLocationlatitude: 22.2882, placeLocationlongitude: 73.1606,

    queryPoints: [{
      id: 0, queryPointType: 'Event Stage', queryPointDescription: 'The main stage of the event.', queryPointlatitude: 22.2882, queryPointlongitude: 73.1606,
    }, {
      id: 1, queryPointType: 'Food Court', queryPointDescription: 'A variety of food options available here.', queryPointlatitude: 22.2875, queryPointlongitude: 73.1615,
    }], websiteLink: 'https://example.com/event2',
  }];