import { useState } from "react";
import { Form, Button } from "react-bootstrap";


export const UserEdit = ({user, token, updateUser, onLoggedOut}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {}

        if (username !== '') {
            data.Username = username
        } else if (email !== '') {
            data.Email = email
        } else if (password !== '') {
            data.Password = password
        } else if (birthday !== '') {
            data.Birthday = birthday
        } else {
            alert('Nothing to change!')
        }

        fetch(`https://myflix-88009.herokuapp.com/users/${user._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            }
            
        }).then((response) => {
            if (response.ok) {
                alert('Your data was updated!');
                onLoggedOut();
            } else {
                console.log(data)
                alert('Something Wrong')
            }
        });  
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className='text-center'>Update your profile</h2>
            <Form.Group controlId='formUsername'>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength='5'
                />
            </Form.Group>

            <Form.Group controlId='formPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='formEmail'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='formBirthday'>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type='date'
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </Form.Group>

            <Button className='mt-3 w-100' variant='primary' type='submit'>Submit</Button>
        </Form>
    );
};