import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch('https://myflix-88009.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful');
        window.location.reload();
      } else {
        console.log(data);
        alert('Signup failed');
      }
    });
  };

  return (
    <Form
      className='border border-3 border-secondary border-opacity-50 rounded px-5 py-3 text-primary'
      onSubmit={handleSubmit}
    >
      <h2 className='text-center'>Sign up</h2>
      <Form.Group controlId='formUsername'>
        <Form.Label className='mt-3'>Username:</Form.Label>
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
          autoComplete='new-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength='8'
        />
      </Form.Group>

      <Form.Group controlId='formEmail'>
        <Form.Label className='mt-3'>Email:</Form.Label>
        <Form.Control
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId='formBirthday'>
        <Form.Label className='mt-3'>Birthdate:</Form.Label>
        <Form.Control
          type='date'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>

      <Button className='mt-3 w-100' variant='primary' type='submit'>
        Submit
      </Button>
      <div className='text-end mt-3'>
        <a className='text-decoration-none' href='/login'>
          Log in
        </a>
      </div>
    </Form>
  );
};
