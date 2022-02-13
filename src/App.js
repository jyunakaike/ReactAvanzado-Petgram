import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { ListOfPhotoCardsContainer } from './container/ListOfPhotoCardsContainer'



import { Logo } from './components/Logo'

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />

    <ListOfCategories />
    <ListOfPhotoCardsContainer categoryId={1} />

  </React.Fragment >

)


