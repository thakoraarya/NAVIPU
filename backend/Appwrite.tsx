import React, { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';

// Define an interface for the first type of document
interface placeDocument {
  id: string; // Add an id property
  Latitude: string;
  Longitude: string;
  Name: string;
  // Add other properties as needed
}

// Define an interface for the second type of document
interface EventDocument {
  id: string; // Add an id property
  eventName: string;
  eventDescription: string;
  placeName: string;
  eventdate: string;
  queryPoint: string;
  websiteLink: string;
  imageURL: string[]; // Assuming imageURL is an array of strings
}

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6515a6863cc51b4b5753');

const databases = new Databases(client);

export default function AppWriteServer() {
  const [placeDocuments, setPlaceDocuments] = useState<placeDocument[]>([]);
  const [eventDocuments, setEventDocuments] = useState<EventDocument[]>([]);

  useEffect(() => {
    const fetchPlaceDocuments = async () => {
      try {
        const response = await databases.listDocuments('651a64c780f4e31fb04c', '651a64fbdae2453eafd0');

        // Map Appwrite Document objects to placeDocument
        const locationDocs = response.documents.map((doc: Record<string, any>) => ({
          Latitude: doc.Latitude, Longitude: doc.Longitude, Name: doc.Name, id: doc.$id, // Store the document ID
        }));

        setPlaceDocuments(locationDocs);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchEventDocuments = async () => {
      try {
        const response = await databases.listDocuments('651a64c780f4e31fb04c', '651a658c2bfbb3d0bcec');

        // Map Appwrite Document objects to EventDocument
        const eventDocs = response.documents.map((doc: Record<string, any>) => ({
          eventName: doc.eventName,
          eventDescription: doc.eventDescription,
          placeName: doc.placeName,
          eventdate: doc.eventdate,
          queryPoint: doc.queryPoint,
          websiteLink: doc.websiteLink,
          imageURL: doc.imageURL,
          id: doc.$id, // Store the document ID
        }));

        setEventDocuments(eventDocs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaceDocuments();
    fetchEventDocuments();
  }, []);


  const handleRemoveLocationDocument = async (id: string) => {
    try {
      // Specify the database collection ID for Location documents
      const collectionId = '651a64fbdae2453eafd0';

      // Delete the document from Appwrite
      await databases.deleteDocument('651a64c780f4e31fb04c', collectionId, id);

      // Update the table by removing the deleted Location document
      setPlaceDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveEventDocument = async (id: string) => {
    try {
      // Specify the database collection ID for Event documents
      const collectionId = '651a658c2bfbb3d0bcec';

      // Delete the document from Appwrite
      await databases.deleteDocument('651a64c780f4e31fb04c', collectionId, id);

      // Update the table by removing the deleted Event document
      setEventDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  // Define a generic renderTable function to handle both types of documents
  const renderTable = <T extends { id: string }>(data: T[], handleRemoveDocument: (id: string) => void) => {
    if (!data || data.length === 0) {
      return null; // Return null or display an empty message when data is empty
    }

    const keys = Object.keys(data[0]);

    return (<div className='overflow-y-scroll h-auto'>
      <table className='border-2 border-black p-1'>
        <thead>
        <tr className='border-2 border-black'>
          {keys.map((key) => (<th key={key} className='border-2 border-black'>{key}</th>))}
          <th className='border-2 border-black'>Actions</th>
          {/* Add an Actions column */}
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (<tr key={index} className='border-2 border-black'>
          {keys.map((key) => (<td key={key} className='border-2 border-black'>{(item as any)[key]}</td>))}
          <td className='border-2 border-black'>
            <button
              className='hover:bg-light-on-error-container hover:text-light-error-container  p-2 bg-light-error-container'
              onClick={() => handleRemoveDocument(item.id)}>Remove
            </button>
          </td>
        </tr>))}
        </tbody>
      </table>
    </div>);
  };


  return (
    <section
      className='flex flex-col w-full gap-y-4 h-auto text-sm p-4 border-2 rounded-lg bg-light-surface overflow-y-hidden uppercase'>
      <div className='p-2 h-auto'>
        <h2 className='text-3xl font-bold text-blue-500'>Events List</h2>
        {renderTable(eventDocuments, handleRemoveEventDocument)}
      </div>
      <div className='p-2 h-auto'>
        <h2 className='text-3xl font-bold text-blue-500'>Places List</h2>
        {renderTable(placeDocuments, handleRemoveLocationDocument)}
      </div>
    </section>
  );
}
