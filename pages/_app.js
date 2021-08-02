import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura Base</title>
        <meta name="description" content="Projeto do Bootcamp - Alura" />
        <meta property="og:title" content="Instalura" />
        <meta property="og:description" content="Projeto do Bootcamp - Alura" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instalura-base-wallbarbeiro.vercel.app/" />
        <meta property="og:image" content="https://instalura-base-wallbarbeiro.vercel.app/images/projeto-base.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </ThemeProvider>
    </>
  );
}
