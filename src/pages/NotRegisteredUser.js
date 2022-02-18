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
          (register, {data, loading, error}) => {
            const onSubmit = ({email, password})=> {
              const input= {email, password}
              const variables = {input}
              register({variables}).then(activateAuth)
            }
            const errorMsg= error && `El usuario ya existe o hay un problema.`

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>

      <UserForm aproveAuth={activateAuth} title='Iniciar Sesion' />
    </React.Fragment>
  )
}
