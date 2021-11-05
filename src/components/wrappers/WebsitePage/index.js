/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import FormCadastrarFoto from '../../patterns/FormcadastrarFoto';
import SEO from '../../commons/SEO';

import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
        getCMSContent: (cmskey) => get(messages, cmskey),
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
            menuProps.isLoged
              ? <FormCadastrarFoto propsDoModal={propsDoModal} setModalState={setModalState} />
              : <FormCadastro propsDoModal={propsDoModal} />
          )}

        </Modal>
        {menuProps.display && (
          <Menu isLoged={menuProps.isLoged} onCadastrarClick={() => setModalState(true)} />
        )}
        {children}
        {!menuProps.isLoged && <Footer /> }
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    isLoged: false,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    isLoged: PropTypes.bool,
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
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
