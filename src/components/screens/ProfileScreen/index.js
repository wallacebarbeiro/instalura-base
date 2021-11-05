/* eslint-disable react/prop-types */
import React from 'react';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import { ListaPhotos, UserInfo } from './styles';

export default function ProfilePage({ posts }) {
  return (
    <Box
      flex="1"
      backgroundColor="#F2F2F2"
      padding="0px 0px 50px 0px"
    >
      <Grid.Container
        flex="1"
        alignItems="center"
        paddingLeft={{
          xs: '16px',
        }}
        paddingRight={{
          xs: '16px',
        }}
      >
        <Grid.Row
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          <Grid.Col
            display="flex"
            justifyContent="center"
            alignItems="center"
            value={{ xs: 12, md: 12 }}

          >
            <UserInfo
              margin={{
                xs: '17px 0px 0px 0px',
                lg: '65px 0px',
              }}
              maxWidth={{
                xs: '500px',
                lg: '593px',
              }}
              gridTemplateColumns={{
                xs: 'repeat(4, 1fr)',
                md: '2fr repeat(3, 1fr)',
              }}
              gridTemplateRows={{
                xs: '1fr 1fr',
                md: '75px 1fr',
              }}
            >
              <li>
                <img src="https://picsum.photos/id/237/200/300" alt="" />
              </li>

              <li>
                <p>
                  <span>234</span>
                  <span>Publicações</span>
                </p>
              </li>

              <li>
                <p>
                  <span>22k</span>
                  <span>Seguindo</span>
                </p>
              </li>

              <li>
                <p>
                  <span>134k</span>
                  <span>Seguidores</span>
                </p>
              </li>

              <li>
                <p>
                  <span>Nome da Pessoa</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </span>
                </p>
              </li>
            </UserInfo>

          </Grid.Col>

          <Grid.Col
            display="flex"
            flexDirection="column"
            justifyContent="center"
            offset={{ md: 0 }}
            value={{ xs: 12, md: 8 }}
            flex={1}
          >

            <ListaPhotos>
              {posts?.reverse().map((item) => (
                <li key={`${item.createdAt}`}>
                  <img src={item.photoUrl} alt={item.description} className={`filter-${item.filter}`} />
                </li>
              ))}
            </ListaPhotos>

          </Grid.Col>

        </Grid.Row>
      </Grid.Container>

    </Box>
  );
}
