import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { RegisterMutation } from '../container/RegisterMutation';

import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  return (
    <React.Fragment>
      <RegisterMutation>
        {
          (register) => {
            const onSubmit = ({email, password})=> {
              const input= {email, password}
              const variables = {input}
              register({variables}).then(activateAuth)
            }
            return <UserForm  onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>

      <UserForm aproveAuth={activateAuth} title='Iniciar Sesion' />
    </React.Fragment>
  )
}
