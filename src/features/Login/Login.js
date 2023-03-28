import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, Textbox } from '../../components';
import { constants } from '../../constants';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const onLogin = (e) => {
        e.preventDefault();
        const loginObj = {
            email: email,
            password: password
        }
        var URL = '';
        if (selectedOption === 'receptionist') {
            URL = window._env_.API_URL + '/receptionist/login';
        } else {
            URL = window._env_.API_URL + '/admin/login';
        }
        fetch(URL, {
            body: JSON.stringify(loginObj),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((data) => {
            if (data.status === 200) {
                if (selectedOption === 'receptionist') {
                    navigate('/receptionist')
                } else {
                    navigate('/admin')
                }
            }
        });
    }
    return (
        <div className='mt-5'>
            <Form>
                <p className='login-message'>{constants.REACT_APP_LOGIN_LABEL}</p>
                <Form.Group className="mb-2 radio-style" >
                    <Form.Check type='radio' name='login' label='Admin' onClick={() => setSelectedOption('admin')}/>
                    <Form.Check type='radio' name='login' label='Receptionist' onClick={() => setSelectedOption('receptionist')}/>
                </Form.Group>
                <Form.Group className="mb-2 form-group-style" >
                    <Textbox label = {constants.REACT_APP_EMAIL_LABEL} type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-2 form-group-style" >
                    <Textbox label = {constants.REACT_APP_PASSWORD_LABEL} type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <div className='login-button'>
                    <Button label = {constants.REACT_APP_LOGIN_LABEL} onClick={(e) => onLogin(e)}/>
                </div>
            </Form>
        </div>
    )
}

export default Login;