import React from "react";
import { useQuery } from "@apollo/client";

import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

export const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })

  if (error) {

    console.log(error)
    return <h2> Internal Server Error</h2> 
  }

  if (loading) {
    return <h2>loading...</h2>
  }

  return <ListOfPhotoCards data={data} />

}
