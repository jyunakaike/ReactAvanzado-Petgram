import React from 'react';
import { Link } from 'react-router-dom';
import { Article, ImgWrapper, Img } from './styles';

// components
import { FavButton } from '../FavButton';
// import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

// react- icon 
// import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  // const handleFavClick = () => setLiked(!liked)

  const toggleLike = ToggleLikeMutation()
  const handleFavButtonClick = () => {
    !liked && toggleLike(
      { variables: 
        { input: 
          { id: id }
        }
      }
    )
    setLiked(!liked)
  }

  return (
    <Article ref={element} >
      {
        show &&
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavButtonClick} />
        </React.Fragment>
      }
    </Article>
  )
}
