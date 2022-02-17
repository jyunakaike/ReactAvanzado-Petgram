import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'


// pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

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

        </Routes>
        <Navbar />
      </BrowserRouter>
    </React.Fragment >
  )
}



