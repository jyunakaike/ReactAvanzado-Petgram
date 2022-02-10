import React from 'react';
import { Category } from '../Category';

import {List, Item } from './styles'

export const ListOfCategories = () => {
  const array = [1,2,3,4]
  return (
    <List>
      {
        array.map(category => <Item key= {category}><Category /></Item>)
      }
    </List>

    
  )
}
