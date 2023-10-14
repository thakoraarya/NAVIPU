import React, { ChangeEvent, useState } from 'react';
import { InputElements, TextAreaElements } from '@/src/Components/atoms/InputComponents';
import { Client, Databases, ID, Storage } from 'appwrite';
import Header from '@/src/Components/molecules/Header';
import { useUser } from '@auth0/nextjs-auth0/client';
import AppWriteServer from '@/backend/Appwrite';


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

  const { user, isLoading } = useUser();
  const [locationFormData, setLocationFormData] = useState<LocationFormData>({
    Name: '', Description: '', Latitude: '', Longitude: '',
  });
  const [eventFormData, setEventFormData] = useState<EventFormData>({
    eventName: '',
    eventDescription: '',
    placeName: '',
    eventdate: '',
    latitude: '',
    longitude: '',
    queryPoint: '',
    websiteLink: '',
  });
  const [successPlaceMessage, setSuccessPlaceMessage] = useState<string>('');
  const [successEventMessage, setSuccessEventMessage] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleLocationFormSubmit = async () => {
    try {
      const collectionId = '651a64fbdae2453eafd0'; // Replace with your Appwrite collection ID for locations
      const response = await databases.createDocument('651a64c780f4e31fb04c', // Replace with your Appwrite database ID
        collectionId, ID.unique(), {
          Name: locationFormData.Name,
          Description: locationFormData.Description,
          Latitude: locationFormData.Latitude,
          Longitude: locationFormData.Longitude,
        });
      console.log('Location Form Data:', response);
      setSuccessPlaceMessage('Location form submitted successfully');
    } catch (error) {
      console.error('Error submitting Location Form:', error);
    }
  };

  const handleEventFormSubmit = async () => {
    try {
      const collectionId = '651a658c2bfbb3d0bcec'; // Replace with your Appwrite collection ID for events
      const response = await databases.createDocument('651a64c780f4e31fb04c', // Replace with your Appwrite database ID
        collectionId, ID.unique(), {
          eventName: eventFormData.eventName,
          eventDescription: eventFormData.eventDescription,
          eventdate: eventFormData.eventdate,
          placeName: eventFormData.placeName,
          latitude: eventFormData.latitude,
          longitude: eventFormData.longitude,
          queryPoint: eventFormData.queryPoint,
          websiteLink: eventFormData.websiteLink,
        });
      console.log('Event Form Data:', response);
      setSuccessEventMessage('Event form submitted successfully');
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


  return (isLoading ? <div className='w-screen h-screen bg-amber-50 text-center text-8xl'>loading</div> : user ? (
    <section className='w-full h-auto px-[4%]  flex flex-col gap-y-5'>
      <Header />
      <AppWriteServer />
      <section className='flex flex-wrap m-1 p-1 gap-2 text-[#1B1C17]'>
        <div className='w-auto h-fit p-4 border-2 rounded-lg bg-light-surface shadow-md mt-4 md:mt-0'>
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
          <button onClick={handleEventFormSubmit}
                  className='bg-light-primary-container rounded-full border2 py-2 px-4 border-amber-900'>Save
            Event
          </button>
          <p>{successEventMessage}</p>
        </div>
        <div className='w-min h-fit p-4 border-2 rounded-lg bg-light-surface shadow-md'>
          <p className='text-xl font-bold text-blue-500 mb-4'>Places Form:</p>
          <form onSubmit={handleLocationFormSubmit} className='flex justify-between w-1/2 flex-wrap'>
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
            <button type='submit' onClick={handleLocationFormSubmit}
                    className='bg-light-primary-container rounded-full border2 py-2 px-4'>Save Location
            </button>
          </form>
          <p>{successPlaceMessage}</p>
        </div>


      </section>

    </section>) : (<section
    className='w-screen h-screen flex flex-col justify-center items-center '>
    <p className='text-5xl text-red-800 font-bold'>401</p>
    <p className='text-3xl text-light-on-error-container font-extrabold'> Unauthorised User</p>
    <a className='text-3xl text-light-primary font-bold cursor-pointer' href='/'>  <span
      className='material-symbols-outlined cursor-pointer font-semibold text-xl w-fit'
    >
        arrow_back
      </span> Go back</a>
  </section>));

}
