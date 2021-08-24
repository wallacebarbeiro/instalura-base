import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Instalura - Projeto Base do Alura Bootcamp JAMStack';
  const title = hasHeadTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;
  const description = 'Projeto do Bootcamp - Alura';
  const urlBase = 'https://instalura-base-wallbarbeiro.vercel.app/';
  const image = 'https://instalura-base-wallbarbeiro.vercel.app/images/projeto-base.png';
  return (
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
