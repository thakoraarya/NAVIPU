import React from 'react';

const ControllPanel = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between rounded-xl m-2 p-2 md:bg-[#596400] md:border-[#DDEB78] border-2 backdrop-blur-sm bg-opacity-10'>
      <div className='md:w-1/2 md:flex items-center'>
        <input
          type="text"
          className='m-1 p-2 rounded-2xl border-[#DDEB78] border-2 md:w-full w-auto'
          placeholder='Destination'
        />
        <button className='border-[#DDEB78] border-2 md:p-2 md:rounded-full bg-[#BEECDD] text-[#002019]'>
          Set Directions
        </button>
      </div>
      <div className='flex mt-2 md:mt-0'>
        <div className='p-2 border-2 border-[#DDEB78] rounded-xl bg-[#DDEB78]'>Time:</div>
        <div className='p-2 border-2 border-[#DDEB78] rounded-xl bg-[#DDEB78]'>Distance:</div>
      </div>
    </div>
  );
};

export default ControllPanel;
