import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'


export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />

  </React.Fragment >

)


