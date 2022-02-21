import React from "react";
import { gql , useMutation } from "@apollo/client";

// define mutation
const LIKE_PHOTO = gql`
mutation likePhoto ($input: LikePhoto!) {
  likePhoto(input: $input){
    id,
    liked,
    likes
  }
}
`

export function ToggleLikeMutation() {
  const [toggleLikeMutation ]= useMutation(LIKE_PHOTO);
  return toggleLikeMutation
}

