import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Link from '../Link';

export default function Menu({ onCadastrarClick, isLoged }) {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  if (isLoged) {
    return (
      <Box
        padding={{
          xs: '12px 0px 12px 0px',
          lg: '25px 0px',
        }}
        borderBottom={{
          xs: '0px',
          lg: '1px solid #D5D5D5',
        }}
        backgroundColor={{
          xs: '#F2F2F2',
          lg: '#fff',
        }}
      >
        <Grid.Container
          display="flex"
          alignItems="center"
          padding={{
            xs: '0px',
          }}
        >
          <Grid.Row
            flex="1"
            alignItems="center"
            justifyContent="center"
            margin={{
              xs: '0px',
            }}
          >
            <Grid.Col
              display="flex"
              flexDirection="column"
              justifyContent="center"
              value={{ xs: 12, md: 6, lg: 10 }}
              flex={1}
              padding={{
                xs: '0px',
              }}
            >

              <MenuWrapper
                marginTop="0px"
                padding={{
                  xs: '0px',
                }}
              >
                <Grid.Row
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                  padding={{
                    xs: '0px',
                  }}
                >
                  <MenuWrapper.LeftSide
                    profileImage="true"
                    className="logo--mobile"
                  >
                    <Logo
                      size="medium"

                    />
                  </MenuWrapper.LeftSide>

                  <MenuWrapper.RightSide
                    className="menu--mobile"
                  >
                    <MenuWrapper.AlignMenuItems>
                      <li>
                        <form>
                          <button type="button">
                            <img src="/images/lupa.svg" alt="Buscar" />
                          </button>
                          <input placeholder="Pesquisar" type="text" />
                        </form>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="cadastrarFoto"
                          onClick={onCadastrarClick}
                        >
                          +
                        </button>
                      </li>
                      <li>
                        <Link href="/">
                          <img src="/images/home.svg" alt="Home" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/app/feed">
                          <img src="/images/heart.svg" alt="Feed" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/app/profile">
                          <img src="https://picsum.photos/id/237/200/300" alt="Perfil" />
                        </Link>
                      </li>
                    </MenuWrapper.AlignMenuItems>

                  </MenuWrapper.RightSide>
                </Grid.Row>

              </MenuWrapper>

            </Grid.Col>
          </Grid.Row>
        </Grid.Container>

      </Box>

    );
  }

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={onCadastrarClick}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
  isLoged: PropTypes.bool,
};

Menu.defaultProps = {
  isLoged: false,
};
