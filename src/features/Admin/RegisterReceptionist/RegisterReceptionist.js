import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../../components';
import './RegisterReceptionist.css';
import { constants } from '../../../constants';

function RegisterReceptionist() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [abhaID, setAbhaID] = useState("");
    const onRegister = (e) => {
        e.preventDefault();
        const password='receptionist';
        const createObj = {
            name,
            email,
            phoneNo,
            gender,
            address,
            abhaID,
            password
        }

        fetch(`${window._env_.API_URL}/receptionist/add`, {
            body: JSON.stringify(createObj),
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(response => response.json())
        .then((data) => {
            console.log(data);
            setShow(true);
        })
    }

    return (
        <div className='form-container'>
            <p className='form-heading'>{constants.REACT_APP_ADMIN_RECEPTIONIST_REGISTRATION }</p>
            <Form>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_NAME_LABEL} type="text" onChange={(e) => setName(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_EMAIL_LABEL} type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_PHONE_NO_LABEL} type="phone" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_GENDER_LABEL} type="text" onChange={(e) => setGender(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_ADDRESS_LABEL} type="text" onChange={(e) => setAddress(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_ABHA_ID_LABEL} type="text" onChange={(e) => setAbhaID(e.target.value)}/>
                </Form.Group>
                <div className='form-register-button'>
                    <Button label = {constants.REACT_APP_REGISTER_LABEL} onClick={(e) => onRegister(e)}/>
                </div>
                <SuccessModal show = {show} onButtonClick={setShow}/>
            </Form>
        </div>
    )
}

export default RegisterReceptionist; 