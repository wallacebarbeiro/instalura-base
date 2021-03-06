import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);
  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}

FAQPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  faqCategories: PropTypes.array.isRequired,
};
