import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { Button, Textbox } from '../../components';
import { constants } from '../../constants';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AESUtils from '../../encryption/AESUtils';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [error, setError] = useState(false);
    const onLogin = (e) => {
        e.preventDefault();
        const loginObj = {
            username: email,
            password: AESUtils.encrypt(password),
            role:  selectedOption === 'receptionist' ? 'RECEPTIONIST' : 'ADMIN'
        }
        const URL = process.env.REACT_APP_API_URL + '/authenticate';

        fetch(URL, {
            body: JSON.stringify(loginObj),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((data) => {
            if (data.status === 200) {
                setError(false);
                localStorage.setItem("user", JSON.stringify(data.object))
                localStorage.setItem("token", data.object.accessToken)
                if (selectedOption === 'receptionist') {
                    navigate('/receptionist')
                } else {
                    navigate('/admin')
                }
            } else {
                setError(true);
            }
        }).catch((e) => {
            setError(true);
        });
    }
    return (
        <div className='mt-5'>
            <Form>
                {error && <Alert variant='danger' className='login-error'>Wrong Credentials!</Alert>}
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