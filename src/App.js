import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'


// pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'
import { Fav } from './pages/Fav'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

// component
import { Navbar } from './components/Navbar'
import { Logo } from './components/Logo'


// const UserLogged = ({ children }) => {
//   return children({ isAuth: true })
// }

export const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={(isLogged)?<Fav /> : <NotRegisteredUser />} />
          <Route path='/user' element={(isLogged)?<User />: <NotRegisteredUser />} />

          <Route path='/*' element={<NotFound />} />
        </Routes>

        <Navbar />
      </BrowserRouter>
    </React.Fragment >
  )
}



