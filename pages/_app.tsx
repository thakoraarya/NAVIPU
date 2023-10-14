import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Client } from 'appwrite';
import Head from 'next/head';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6518eb53dee49fab2542');

  return (
    <>
      <UserProvider>
        <Head>
          <title>DEV | PUNav</title>
        </Head>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
