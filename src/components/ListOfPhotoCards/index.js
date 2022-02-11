import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {

  const array = [1,2,3,4,5]
  return (
    <React.Fragment>
      {
        array.map(card => <PhotoCard key={card}></PhotoCard>)
      }
    </React.Fragment>


  )
}
