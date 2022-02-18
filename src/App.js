import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'


// pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'
import {Fav} from './pages/Fav'
import {User} from './pages/User'

// component
import { Navbar } from './components/Navbar'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/favs' element={<Fav />} />
          <Route path='/user' element={<User />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </React.Fragment >
  )
}



