import React, { useRef } from 'react';
import {Form ,Input, Button, Title} from './styles';

export const UserForm = ({ aproveAuth, title }) => {
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)
    console.log(formEntries)
    aproveAuth();
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
