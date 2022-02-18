import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <React.Fragment>
      <UserForm aproveAuth={activateAuth} title='Registrarse' />
      <UserForm aproveAuth={activateAuth} title='Iniciar Sesion' />
    </React.Fragment>
  )
}
