import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {

  const array = [1,2,3,4,5,8,9]
  return (
    <React.Fragment>
      {
        array.map(card => <PhotoCard key={card} id={card}></PhotoCard>)
      }
    </React.Fragment>


  )
}
