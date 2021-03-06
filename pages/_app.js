import React from 'react';
import Head from 'next/head';
import '../src/assets/css/instagram.css';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </>
  );
}
