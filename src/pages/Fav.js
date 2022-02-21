import React from 'react'
import { RenderProp as FavsWithQuery } from '../container/GetFavorites'

export const Fav = () => {
  return (
    <React.Fragment>
      <div>Este es Fav</div>
      <FavsWithQuery />
    </React.Fragment>
    
  )
}
