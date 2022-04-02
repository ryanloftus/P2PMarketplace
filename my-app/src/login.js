import React, { useState } from 'react';
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
    [isNewUser, setIsNewUser] = useState(false);
    [username, setUsername] = useState('');
    [password, setPassword] = useState('');
 
    let varText;
    let onSubmit;
    
    if (isNewUser) {
        varText = createAccountText;
        onSubmit = () => {
            const data = { username: username, password: password };
            try {
                const res = await fetch('http://localhost:5000/api/v1/users/', {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    params: JSON.stringify(data),
                });
                const body = await res.json();
                if (body?.wasPostSuccessful) {
                    props.loginUser(username);
                    props.goToAds();
                } else {
                    Alert('Username is taken. Please use a different username.');
                }
            } catch (err) {
                console.error(`Failed to create account. ${err}`);
                Alert('Action failed. Please try again later.');
            }
        };
    } else {
        varText = loginText;
        onSubmit = () => {
            const data = { username: username };
            try {
                const res = await fetch('http://localhost:5000/api/v1/users/', {
                    method: 'GET',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    params: JSON.stringify(data),
                });
                const body = await res.json();
                if (body !== null && body.password === password) {
                    props.loginUser(username);
                    props.goToAds();
                } else {
                    Alert('Username or password are incorrect.');
                }
            } catch (err) {
                console.error(`Failed to create account. ${err}`);
                Alert('Action failed. Please try again later.');
            }
        };
    }

    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: '#333', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Card style={{width: '32rem', padding: '2rem'}}>
                <Card.Title>{varText.title}</Card.Title>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={(text) => setUsername(text)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(text) => setPassword(text)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>{varText.submit}</Button>
                <Form.Text>{varText.switchPrompt}</Form.Text>
                <Button variant="link" onClick={() => setIsNewUser(!isNewUser)}>{varText.switchButton}</Button>
            </Card>
        </div>
    );
}

export default Login;