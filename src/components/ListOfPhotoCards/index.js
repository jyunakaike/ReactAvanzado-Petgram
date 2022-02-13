import React from 'react'
// components
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({data}) => {
  return (
    <React.Fragment>
      {
        data.photos.map(card => <PhotoCard key={card.id} {...card}>  </PhotoCard>)
      }
    </React.Fragment>
  )
}
