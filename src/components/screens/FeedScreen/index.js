import React from 'react';
import PropTypes from 'prop-types';
import FeedCard from '../../commons/FeedCard';
import PerfilsCard from '../../commons/PerfilsCards';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function FeedPage({ posts, user }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      backgroundColor="#F2F2F2"
      padding="0px 0px 50px 0px"
    >
      <Grid.Container
        paddingLeft={{
          xs: '16px',
        }}
        paddingRight={{
          xs: '16px',
        }}
      >

        <Grid.Row
          flex="1"
          alignItems="flex-start"
        >
          <Grid.Col
            paddingRight="0px"
            paddingLeft="0px"
            offset={{ lg: 1 }}
            value={{ xs: 12, lg: 6 }}
          >
            {posts && posts.map((post, index) => (
              index === 0
                ? <FeedCard key={`${post.updatedAt}-${post.createdAt}`} post={post} user={user} isFirst />
                : <FeedCard key={`${post.updatedAt}-${post.createdAt}`} post={post} user={user} />
            ))}

          </Grid.Col>

          <Grid.Col
            display={{
              xs: 'none',
              lg: 'block',
            }}
            paddingLeft="57px"
            paddingRight="0px"
            value={{ xs: 12, md: 4 }}
          >
            <PerfilsCard imgSize="64px" isMain />
            <Text
              tag="h2"
              color="#88989E"
              fontWeight="500"
              marginTop="48px"
              marginBottom="22px"
            >
              Projetos da galera
            </Text>
            <PerfilsCard imgSize="48px" />
            <PerfilsCard imgSize="48px" />
            <PerfilsCard imgSize="48px" />
            <PerfilsCard imgSize="48px" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

FeedPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
  user: PropTypes.shape().isRequired,
};
