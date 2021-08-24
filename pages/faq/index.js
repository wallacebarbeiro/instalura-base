import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  // console.log('Renderizou');
  // didMount
  // willMount
  // willUnmount

  // const [faqCategories, setFaqCategories] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((respostaDoServer) => respostaDoServer.json())
  //     .then((respostaConvertida) => respostaConvertida.data)
  //     .then((resposta) => setFaqCategories(resposta));
  // }, []);

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

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
