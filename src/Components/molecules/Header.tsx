import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Profile from '@/src/Components/atoms/Profile';
import AuthButton from '@/src/Components/atoms/AuthButton';
import Image from 'next/image';


const Header = () => {
  // Call useUser to get user information
  const { user } = useUser();

  return (<header
    className='relative w-auto h-min mx-[2%] flex justify-between rounded-b-3xl border-t-0 items-center p-4  border-[#78786a] border-2'>
    <Image
      width={300} // Specify the width here
      height={200} // Specify the height here
      className='rounded max-h-[4rem] max-w-fit'
      src='https://yt3.googleusercontent.com/oEQpDQ-Mt5ICmTvrKelavxxPI1Pk2i3dt0JM1fypJvylX1SEvkVjAeqOhwXNOeQK9k3RSWY5ZQ=s176-c-k-c0x00ffffff-no-rj'
      alt=''
    />

    <h1 className='text-3xl font-bold w-auto  '>PU Nav</h1>
    <section className='w-auto items-center flex gap-4'>
      {user ? (<>
        <Profile innertext='welcome' />
        <button className=' bg-light-primary-container text-[#1a1e00] px-4 py-2 rounded-3xl'>
          <AuthButton AuthPath='/api/auth/logout' authState='logout' />
        </button>
      </>) : (

        <button className=' bg-light-primary-container text-[#1a1e00] px-4 py-2 rounded-3xl'>
          <AuthButton AuthPath='/api/auth/login' authState='login' />
        </button>

      )}
    </section>
  </header>);
};

export default Header;
