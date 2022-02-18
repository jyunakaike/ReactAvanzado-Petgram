import React, { useRef } from 'react';
import {Form ,Input, Button, Title} from './styles';

export const UserForm = ({ onSubmit, title }) => {
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
      <Form ref={form}>
        <Input type='text' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
      </Form>
      <Button onClick={handleSubmit} >
        Log In
      </Button>
    </React.Fragment>
  )
}
