import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <React.Fragment>
      <form onSubmit={activateAuth}>
        <button onClick={console.log('click en login')}>
          Log In 
        </button>
      </form>

    </React.Fragment>

  )
}
