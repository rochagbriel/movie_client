import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        // This prevent default behavior
        event.preventDefault();

        const data = {
            username: username,
            password: password
        };

        fetch('https://myflix-88009.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                onLoggedIn(username);
            } else {
                alert('Login Failed!');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}required
                    minLength='3'
                />
            </label>
            <label>
                Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}required
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
};