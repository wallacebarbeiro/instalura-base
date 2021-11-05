import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import Link from '../Link';
import { PerfilImage, PerfilsInfo, PerfilsWrapper } from './styles';

export default function PerfilsCard({ imgSize, isMain }) {
  return (
    <PerfilsWrapper isMain={isMain}>
      <Box
        display="flex"
        alignItems="center"
      >
        <PerfilImage size={imgSize} src="https://picsum.photos/200/300.jpg" alt="..." />
        <PerfilsInfo isMain={isMain}>
          <Text>nic.cage</Text>
          <Text tag="p">Nicolas Cage</Text>
        </PerfilsInfo>
      </Box>
      <Link href="https://github.com/">
        <img src="/images/github.svg" alt="GitHub" />
        <Text>Github</Text>
      </Link>

    </PerfilsWrapper>
  );
}

PerfilsCard.defaultProps = {
  imgSize: '',
  isMain: false,
};

PerfilsCard.propTypes = {
  imgSize: PropTypes.string,
  isMain: PropTypes.bool,
};
