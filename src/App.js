import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsContainer } from './container/ListOfPhotoCardsContainer'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'



import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      {
        (detailId)
          ? <PhotoCardWithQuery id= {detailId} />
          : 
          <React.Fragment>
            <ListOfCategories />
            <ListOfPhotoCardsContainer categoryId={1} /> 
          </React.Fragment>
      }
    </React.Fragment >
  )
}



