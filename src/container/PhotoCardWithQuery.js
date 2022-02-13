import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const query = gql`
query getSinglePhoto($id:ID!){
  photo(id:$id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        console.log(data);
        if (loading)
          return <h1>Loading...</h1>
        if (error)
          return <h1>Server error</h1>

        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
