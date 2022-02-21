import React, { useRef } from 'react';
import {Form ,Input,  Title, Error} from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({ error , disabled, onSubmit, title }) => {
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const input= {
      'email': formData.get('email') ,
      'password' : formData.get('password')
    }
    console.log(input)
    onSubmit(input)
  }

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Form ref={form} disabled={disabled} >
        <Input type='text' name='email' placeholder='Email' disabled={disabled} />
        <Input type='password' name='password' placeholder='Password' disabled={disabled} />
      </Form>
      <SubmitButton onClick={handleSubmit} disabled={disabled} >
        {title}
      </SubmitButton>

      {error && <Error>{error}</Error> }
    </React.Fragment>
  )
}
