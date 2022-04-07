import React, { useState, useEffect, useCallback } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const createAccountText = {
    title: 'Create a New Account',
    submit: 'Create',
    switchPrompt: 'Already have an account?',
    switchButton: 'Login',
};

const loginText = {
    title: 'Login',
    submit: 'Login',
    switchPrompt: 'Don\'t have an account yet?',
    switchButton: 'Create one!',
};

function Login(props) {
    const [isNewUser, setIsNewUser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertText, setAlertText] = useState(undefined);
    const [varText, setVarText] = useState(loginText);

    const onSubmit = useCallback(async () => {
        if (isNewUser) {
            try {
                const res = await fetch('http://localhost:5000/api/v1/users/', {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: username, password: password }),
                });
                const body = await res.json();
                if (body?.successful) {
                    props.loginUser(username);
                    props.goToAds();
                } else {
                    setAlertText('Username is taken. Please use a different username.');
                }
            } catch (err) {
                setAlertText('Failed to create account. Please try again later.');
            }
        } else {
            try {
                const url = new URL('http://localhost:5000/api/v1/users/');
                url.search = new URLSearchParams({ username: username }).toString();
                const res = await fetch(url, { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } });
                const body = await res.json();
                if (body !== null && body.password === password) {
                    props.loginUser(username);
                    props.goToAds();
                } else {
                    setAlertText('Username or password are incorrect.');
                }
            } catch (err) {
                setAlertText('Failed to login. Please try again later.');
            }
        }
    }, [isNewUser, username, password]);
 
    useEffect(() => {
        setAlertText(undefined);
        setVarText(isNewUser ? createAccountText : loginText);
    }, [isNewUser]);

    return (
        <Card style={{width: '32rem', padding: '2rem'}}>
            <Card.Title>{varText.title}</Card.Title>
            {alertText ? <Alert variant='danger'>{alertText}</Alert> : null}
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)} />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onSubmit}>{varText.submit}</Button>
            <Form.Text>{varText.switchPrompt}</Form.Text>
            <Button variant="link" onClick={() => setIsNewUser(!isNewUser)}>{varText.switchButton}</Button>
        </Card>
    );
}

export default Login;