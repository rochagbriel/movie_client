import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { setUser, setToken } from '../../redux/reducers/user';
import { useDispatch } from 'react-redux';

export const LoginView = () => {
  // {onLoggedIn}
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    // This prevent default behavior
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch('https://myflix-88009.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response: ', data);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
        } else {
          alert('No such user');
        }
      })
      .catch((e) => {
        console.error('Login error: ', e);
      });
  };

  return (
    <Form
      className='border border-3 border-secondary border-opacity-50 rounded px-5 py-3 text-primary'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center fs-3 m-4'>Welcome to myFlix</h1>
      <Form.Group controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type='text'
          autoComplete='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength='5'
        />
      </Form.Group>

      <Form.Group controlId='formPassword'>
        <Form.Label className='mt-3'>Password:</Form.Label>
        <Form.Control
          type='password'
          autoComplete='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button className='mt-3 w-100' variant='primary' type='submit'>
        Submit
      </Button>
      <div className='text-end mt-3'>
        <a className='text-decoration-none fs-6' href='/signup'>
          Create a new Account
        </a>
      </div>
    </Form>
  );
};
