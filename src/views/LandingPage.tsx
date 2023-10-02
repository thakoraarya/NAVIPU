import React from "react";
import AuthButton from "../Components/atoms/AuthButton";

const LandingPage = () => {
    return (
        <section
            className='  from-[#DDEB78] via-[#FCF9F1] to-[#BEECDD] h-screen w-full flex flex-col gap-y-4 items-center justify-between px-4 pt-4 overflow-y-hidden text-center'>
            <section className='relative bg-[#171E00] px-6 py-5 rounded-2xl flex justify-between items-center w-full mx-6'>
                <img
                    style={{maxHeight: '50px'}}
                    className='rounded'
                    src='https://yt3.googleusercontent.com/oEQpDQ-Mt5ICmTvrKelavxxPI1Pk2i3dt0JM1fypJvylX1SEvkVjAeqOhwXNOeQK9k3RSWY5ZQ=s176-c-k-c0x00ffffff-no-rj'
                    alt='college icon'
                />

                <p className='w-full text-center text-5xl text-amber-50 uppercase'>
                    streets Of PU
                </p>
                <button
                    className='hover:bg-white bg-[#DDEB78] rounded-2xl px-4 py-2 text-xl md:text-2xl border-black border-2'>
                    <AuthButton AuthPath='/api/auth/login' authState='login'/>
                </button>
            </section>


            <section className='w-full flex flex-col gap-y-4 items-center'>
                <p className='text-6xl leading-snug text-center '>Find Every Corner Of

                    <br/> The Campus With NAVIPU</p>

                <button
                    className='hover:bg-white bg-[#DDEB78] rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'>
                    <a href="/layouts/View">Guest</a></button>
            </section>


            <img src='LandingPageImage.png' className='w-full' alt="Not Available"/>

        </section>
    )
};
export default LandingPage;