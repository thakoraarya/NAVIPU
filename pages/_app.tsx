import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Client } from 'appwrite';
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6518eb53dee49fab2542');

  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
