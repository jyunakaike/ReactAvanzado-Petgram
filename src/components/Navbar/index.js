import React from 'react';
import {MdHome,MdFavoriteBorder ,MdPersonOutline } from 'react-icons/md';
import { Link, Nav } from './styles'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome size={'32px'}></MdHome>
      </Link>

      <Link to='/favs'>
        <MdFavoriteBorder size={'32px'}></MdFavoriteBorder>
      </Link>

      <Link to='/user'>
        <MdPersonOutline size={'32px'}></MdPersonOutline>
      </Link>

    </Nav>
    
  )
}
