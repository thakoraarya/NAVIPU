
import { useMediaQuery } from 'usehooks-ts';
import React from 'react';
import AuthButton from '@/src/Components/atoms/AuthButton';
import Image from 'next/image';

const LandingPage = () => {
  const matches = useMediaQuery('(min-width: 430px)');
  return (
    <section
      className=' conic-gradient bg-[conic-gradient(from 180deg at 50% 50%, #DDEB78 0deg, #FCF9F1 180deg, #BEECDD 360deg)] from-[#DDEB78] via-[#FCF9F1] to-[#BEECDD] h-screen w-full flex flex-col gap-y-4 items-center justify-between px-4 pt-4 overflow-y-hidden text-center'>
      <section
        className='relative bg-[#171E00] px-6 py-5 rounded-2xl flex justify-between items-center w-[95%]'>
        <Image
          className='rounded max-h-[4rem] max-w-fit'
          width={500}
          height={500}
          src='https://yt3.googleusercontent.com/oEQpDQ-Mt5ICmTvrKelavxxPI1Pk2i3dt0JM1fypJvylX1SEvkVjAeqOhwXNOeQK9k3RSWY5ZQ=s176-c-k-c0x00ffffff-no-rj'
          alt='college icon'
        />

        <p className='w-full text-center text-4xl lg:text-5xl text-amber-50 uppercase'>
          streets Of PU
        </p>

        {matches ? <button
          className=' hover:bg-white bg-light-primary-container rounded-2xl px-4 py-2 text-xl md:text-2xl border-black border-2'>
          <AuthButton AuthPath='/api/auth/login' authState='login' />
        </button> : ''}



      </section>


      <section className='w-full flex flex-col gap-y-4 items-center'>
        <p className='lg:text-6xl text-5xl leading-tight text-center '>Find Every Corner Of
          <br /> The Campus With NAVIPU</p>

        <button
          className='hover:bg-white bg-light-primary-container rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'>
          <a href='/layouts/View'>Guest</a></button>
        <span className="text-teal-950 text-xs font-normal font-['Roboto'] leading-none">*For Guests</span>
      </section>

      <Image fill={undefined}
             width={500}
             height={500} src='/LandingPageImage.png' className='w-screen' alt='Not Available' />
    </section>
  );
};
export default LandingPage;