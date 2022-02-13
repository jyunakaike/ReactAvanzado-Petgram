import React from 'react'
import { gql, useQuery } from '@apollo/client'

// components
import { PhotoCard } from '../PhotoCard'

const withPhotos = gql`
  query getPhotos {
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const {loading, error, data } = useQuery(withPhotos);

  if(error) {
    return <h2> Internal Server Error</h2>;
  }
  if(loading){
    return <h2> loading...</h2>
  }

  return (
    <React.Fragment>
      {
        data.photos.map(card => <PhotoCard key={card.id} {...card}>  </PhotoCard>)
      }
    </React.Fragment>


  )
}
