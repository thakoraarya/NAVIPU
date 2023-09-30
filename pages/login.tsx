"use client"
import {useUser} from '@auth0/nextjs-auth0/client';
// import {useState} from 'react';
import LandingPage from './LandingPage';
import AdminMap from './AdminMap';
import React from "react";

const LoginButton = () => {

    const {user} = useUser();
    if (user) {
        console.log(user)
        return (
            <div className='relative'>
                <div className='w-100 bg-[#FCF9F1] p-4 m-4 rounded-b-xl'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <button className='relative cursor-pointer'>
                                &nbsp;Welcome, {user.name}
                            </button>
                        </div>
                         <button className=" bg-[#ddeb78] text-[#1a1e00] px-4 py-2 rounded-3xl">
                        <a href="/api/auth/logout">Logout</a>
                        </button>

                        <span className='p-2'>
              <img
                  style={{maxHeight: '50px'}}
                  className='rounded'
                  src='https://yt3.googleusercontent.com/oEQpDQ-Mt5ICmTvrKelavxxPI1Pk2i3dt0JM1fypJvylX1SEvkVjAeqOhwXNOeQK9k3RSWY5ZQ=s176-c-k-c0x00ffffff-no-rj'
                  alt=''
              />
            </span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <AdminMap/>
                </div>
            </div>

        );
    }
    return (
        <LandingPage/>
    )
};

export default LoginButton;