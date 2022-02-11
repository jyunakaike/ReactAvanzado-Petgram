import React, { useState, useEffect } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://react-avanzado-petgram-jyunakaike.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed} >
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>



    // <List className={(fixed) ? 'fixed' : ''} >
    //   {
    //     categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
    //   }
    // </List>
  )


  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>


  )
}
