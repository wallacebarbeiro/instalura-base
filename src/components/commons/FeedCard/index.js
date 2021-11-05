import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardWrapper,
} from './styles.js';
import { userService } from '../../../services/user/userService';

export default function FeedCard({ post, isFirst, user }) {
  const [isliked, setIsLiked] = React.useState(false);
  const [likeNumber, setLikeNumber] = React.useState(post.likes.length);

  const handleLike = async () => {
    // eslint-disable-next-line no-underscore-dangle
    await userService.sendLike(post._id);
    if (!isliked) {
      setIsLiked(true);
      setLikeNumber(likeNumber + 1);
    } else if (likeNumber > 0) {
      setIsLiked(false);
      setLikeNumber(likeNumber - 1);
    }
  };

  function hasUserLike(likes, userId) {
    const haslike = likes.filter((like) => like.user === userId);
    return haslike.length;
  }

  React.useEffect(() => {
    const cheklike = hasUserLike(post.likes, user.id);
    if (cheklike) {
      setIsLiked(true);
    }
  }, []);

  return (
    <CardWrapper isFirst={isFirst}>
      <CardHeader>
        <div>
          <img src="https://picsum.photos/200/300.jpg" alt="Profile" />
          <Text>
            { user.username }
          </Text>
        </div>
        <button type="button" aria-hidden="true" aria-label="mais opções">
          ...
        </button>
      </CardHeader>
      <CardBody>
        <button type="button" onClick={handleLike}>
          {isliked
            ? <img src="/images/action-heartactive.svg" alt="Liked" />
            : <img src="/images/action-heart.svg" alt="Like" />}
        </button>
        <img className={`filter-${post.filter}`} src={post.photoUrl} alt="Post" />
      </CardBody>
      <CardFooter>
        <div>
          <div>
            <ul>
              <li>
                {isliked
                  ? <img src="/images/action-heartactive.svg" alt="Liked" />
                  : <img src="/images/action-heart.svg" alt="Like" />}

                <Text>
                  {likeNumber}
                </Text>
              </li>
              <li>
                <img src="/images/action-message.svg" alt="Comments" />
                <Text>
                  1.2k
                </Text>
              </li>
              <li>
                <img src="/images/action-send.svg" alt="Send" />
              </li>
            </ul>
          </div>
          <button type="button">
            <img src="/images/action-bookmark.svg" alt="BookMark" />
          </button>
        </div>
        <div>
          <div>
            <img src="/images/likeCombo.png" alt="Liked" />
            <Text>
              {post.description}
            </Text>
          </div>

          <button type="button">
            Mais
          </button>
        </div>
      </CardFooter>
    </CardWrapper>
  );
}

FeedCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.shape().isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.shape().isRequired,
  isFirst: PropTypes.bool,
};

FeedCard.defaultProps = {
  isFirst: false,
};
