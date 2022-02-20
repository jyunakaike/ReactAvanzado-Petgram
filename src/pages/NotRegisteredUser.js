import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  return (
    <React.Fragment>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              // register({ variables }).then(activateAuth)
              register({variables})
            }
            const errorMsg = error && `El usuario ya existe o hay un problema.`

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading ,error})=> {
            const onSubmit = ({email, password})=> {
              const input = {email, password}
              const variables = {input} 
              login( {variables}).then(activateAuth)
            }
            const errorMsg = error && `e-mail o password incorrecto`

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesion' />
          }
        }
      </LoginMutation>
    </React.Fragment>
  )
}
