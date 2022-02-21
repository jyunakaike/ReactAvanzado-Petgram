import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { SubmitButton } from '../components/SubmitButton';

export const User = () => {
  const { removeAuth } = useContext(AppContext);

  return (
    <React.Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth} >Log Out</SubmitButton>
    </React.Fragment>
  )
}
