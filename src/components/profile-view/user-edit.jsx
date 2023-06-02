import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken } from '../../redux/reducers/user';

export const UserEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {};

    username !== ''
      ? (data.Username = username)
      : email !== ''
      ? (data.Email = email)
      : password !== ''
      ? (data.Password = password)
      : birthday !== ''
      ? (data.Birthday = birthday)
      : alert('Nothing to change!');

    fetch(`https://myflix-88009.herokuapp.com/users/${user._id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Your data was updated!');
        dispatch(setUser(null),setToken(null),localStorage.clear(),window.location.reload());
      } else {
        console.log(data);
        alert('Something Wrong');
      }
    });
  };

  return (
    <>
      <h2 className='fs-3'>Update your profile</h2>
      <Form className=' pt-3' onSubmit={handleSubmit}>
        <Form.Group controlId='formUsername'>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            autoComplete='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength='5'
          />
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Form.Label className='pt-2'>Password:</Form.Label>
          <Form.Control
            type='password'
            autoComplete='new-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formEmail'>
          <Form.Label className='pt-2'>Email:</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBirthday'>
          <Form.Label className='pt-2'>Birthday:</Form.Label>
          <Form.Control
            type='date'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Button className='mt-3 w-25' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};
