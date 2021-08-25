/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}

      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalState(false)}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}

        </Modal>
        {menuProps.display && <Menu onCadastrarClick={() => setModalState(true)} />}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    backgroundPosition: PropTypes.object,
  }),
  children: PropTypes.node.isRequired,
};
