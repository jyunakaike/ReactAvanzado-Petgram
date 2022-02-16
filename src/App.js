import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

// pages
import { Home } from './pages/Home'

import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')
  console.log('detailId', detailId);

  const categoryId = urlParams.get('pet')
  console.log('categoryid', categoryId)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      {
        (detailId)
          ? <PhotoCardWithQuery id={detailId} />
          : <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
            </Routes>
          </BrowserRouter>

      }
    </React.Fragment >
  )
}



