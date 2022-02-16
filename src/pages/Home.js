import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsContainer } from '../container/ListOfPhotoCardsContainer'


export const Home = () => {

  const categoryId= useParams()
  
  return (
    <React.Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={categoryId.id} />
    </React.Fragment>
  )
}
