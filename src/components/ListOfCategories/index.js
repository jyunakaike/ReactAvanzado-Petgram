import React, { useState, useEffect } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.fetch('https://react-avanzado-petgram-jyunakaike.vercel.app/categories')
    .then(res => res.json())
    .then(response=> {
      setCategories(response)
    })
  }, [])


  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
