import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Login(props) {
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: '#333', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Card style={{width: '32rem', padding: '2rem'}}>
                <Card.Title>{props.isNewUser ? 'Create a New Account' : 'Login'}</Card.Title>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">{props.isNewUser ? 'Create' : 'Login'}</Button>
                <Form.Text>{props.isNewUser ? 'Already have an account?' : 'Don\'t have an account yet?'}</Form.Text>
                <Button variant="link">{props.isNewUser ? 'Login' : 'Create one!'}</Button>
            </Card>
        </div>
    );
}

export default Login;