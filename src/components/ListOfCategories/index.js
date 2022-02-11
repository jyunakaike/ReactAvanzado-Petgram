import React from 'react';
import { Category } from '../Category';

import { List, Item } from './styles'

// api 
import db from '../../../api/db.json'

export const ListOfCategories = () => {
  const categories = db.categories

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>


  )
}
