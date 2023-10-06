'use client';
import React, { ChangeEvent, useState } from 'react';
import { InputElements, TextAreaElements } from '@/src/Components/atoms/InputComponents';
import { Client, Databases, ID, Storage } from 'appwrite';
import AppWriteServer from '@/backend/appwrite';
import Header from '@/src/Components/molecules/Header';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6515a6863cc51b4b5753');

const databases = new Databases(client);
const storage = new Storage(client);

interface LocationFormData {
  Name: string;
  Description: string;
  Latitude: string;
  Longitude: string;
}

interface EventFormData {
  eventName: string;
  eventDescription: string;
  placeName: string;
  eventdate: string;
  websiteLink: string,
  latitude: string;
  longitude: string;
  queryPoint: string;
}

export default function AdminForm() {
  const [locationFormData, setLocationFormData] = useState<LocationFormData>({
    Name: '', Description: '', Latitude: '', Longitude: '',
  });

  const [eventFormData, setEventFormData] = useState<EventFormData>({
    eventName: '', eventDescription: '', placeName: '', eventdate: '', latitude: '', longitude: '', queryPoint: '', websiteLink: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleLocationFormSubmit = async () => {
    try {
      const collectionId = '651a64fbdae2453eafd0'; // Replace with your Appwrite collection ID for locations
      const response = await databases.createDocument('651a64c780f4e31fb04c', // Replace with your Appwrite database ID
        collectionId, ID.unique(), {
          Name: locationFormData.Name, Description: locationFormData.Description, Latitude: locationFormData.Latitude, Longitude: locationFormData.Longitude,
        });
      console.log('Location Form Data:', response);
      setSuccessMessage('Location form submitted successfully');
    } catch (error) {
      console.error('Error submitting Location Form:', error);
    }
  };

  const handleEventFormSubmit = async () => {
    try {
      const collectionId = '651a658c2bfbb3d0bcec'; // Replace with your Appwrite collection ID for events
      const response = await databases.createDocument('651a64c780f4e31fb04c', // Replace with your Appwrite database ID
        collectionId, ID.unique(), {
          eventName: eventFormData.eventName, eventDescription: eventFormData.eventDescription, eventdate: eventFormData.eventdate, placeName: eventFormData.placeName, latitude: eventFormData.latitude, longitude: eventFormData.longitude, queryPoint: eventFormData.queryPoint, websiteLink: eventFormData.websiteLink,
        });
      console.log('Event Form Data:', response);
      setSuccessMessage('Event form submitted successfully');
    } catch (error) {
      console.error('Error submitting Event Form:', error);
    }
  };


  const handleLocationInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof LocationFormData) => {
    setLocationFormData({
      ...locationFormData, [fieldName]: e.target.value,
    });
  };

  const handleEventInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof EventFormData) => {
    setEventFormData({
      ...eventFormData, [fieldName]: e.target.value,
    });
  };

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      // Convert the FileList to an array
      const fileList = Array.from(files);

      // Check if the total number of selected files exceeds 3
      if (selectedFiles.length + fileList.length <= 3) {
        try {
          // Iterate over the selected files and upload them to the Appwrite bucket
          for (const file of fileList) {
            const uniqueId = ID.unique();
            const response = await storage.createFile('651c4f7a349441fc7571', uniqueId, file);
            console.log(response); // Success
          }

          // Update the selectedFiles state with the newly added files
          setSelectedFiles([...selectedFiles, ...fileList]);
        } catch (error) {
          console.error(error); // Handle upload failure
        }
      } else {
        alert('You can only select a maximum of 3 images.');
        // Clear the input field to reset the selection
        event.target.value = '';
      }
    }
  };


  return (<>
      <Header />
      <div className='flex m-1 p-1 gap-2 text-[#1B1C17]'>
        <div className='w-1/2 h-fit p-4 border-2 rounded-lg bg-[#FBF9F1] shadow-md mt-4 md:mt-0'>
          <p className='text-xl font-bold text-blue-500 mb-4'>Events Form:</p>
          <InputElements
            label='Name'
            placeholder='Enter Event Name'
            onChange={(e) => handleEventInputChange(e, 'eventName')}
          />
          <TextAreaElements
            label='Description'
            placeholder='Enter Event Description'
            onChange={(e) => handleEventInputChange(e, 'eventDescription')}
          />
          <InputElements
            label='Event Date'
            placeholder='Enter Event Date'
            onChange={(e) => handleEventInputChange(e, 'eventdate')}
          />
          <InputElements
            label='Place Name'
            placeholder='Enter Place Name'
            onChange={(e) => handleEventInputChange(e, 'placeName')}
          />
          <InputElements
            label='Latitude'
            placeholder='Enter Latitude Value'
            onChange={(e) => handleEventInputChange(e, 'latitude')}
          />
          <InputElements
            label='Longitude'
            placeholder='Enter Longitude Value'
            onChange={(e) => handleEventInputChange(e, 'longitude')}
          />
          <InputElements
            label='Query Point'
            placeholder='Enter Query Point'
            onChange={(e) => handleEventInputChange(e, 'queryPoint')}
          />
          <InputElements
            label='Website URL'
            placeholder='Enter Website Details'
            onChange={(e) => handleEventInputChange(e, 'websiteLink')}
          />
          <br />
          <br />
          <input
            type='file'
            accept='image/*'
            id='imageInput'
            name='imageFile'
            multiple
            onChange={handleFileChange}
          />
          <br />
          <br />
          <button onClick={handleEventFormSubmit} className='bg-light-primary-container rounded-3xl border-amber-900 border2 p-2'>Save
            Event
          </button>
          <p>{successMessage}</p>
        </div>
        <div className='w-1/2 h-fit p-4 border-2 rounded-lg bg-[#FBF9F1] shadow-md'>
          <p className='text-xl font-bold text-blue-500 mb-4'>Places Form:</p>

          <InputElements
            label='Name'
            placeholder='Enter Location Name'
            onChange={(e) => handleLocationInputChange(e, 'Name')}
          />
          <TextAreaElements
            label='Description'
            placeholder='Enter Location Description'
            onChange={(e) => handleLocationInputChange(e, 'Description')}
          />
          <InputElements
            label='Latitude'
            placeholder='Enter Latitude Value'
            onChange={(e) => handleLocationInputChange(e, 'Latitude')}
          />
          <InputElements
            label='Longitude'
            placeholder='Enter Longitude Value'
            onChange={(e) => handleLocationInputChange(e, 'Longitude')}
          />
          <button onClick={handleLocationFormSubmit} className='bg-light-primary-container rounded-3xl border2 p-2'>Save Location
          </button>
          <p>{successMessage}</p>
        </div>
        <div className='overflow-y-hidden'>
          <AppWriteServer />
        </div>
      </div>

    </>);
}
