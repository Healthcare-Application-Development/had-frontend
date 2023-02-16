import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../components';
import './RegisterPatient.css';
import { constants } from '../../constants';

function RegisterPatient() {
    const [show, setShow] = useState(false);
    const onRegister = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div className='form-container'>
            <p className='form-heading'>{constants.REACT_APP_REGISTRATION_HEADING}</p>
            <Form>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_NAME_LABEL} type="text"/>
                    <Textbox label = {constants.REACT_APP_EMAIL_LABEL} type="email"/>
                    <Textbox label = {constants.REACT_APP_PHONE_NO_LABEL} type="phone"/>
                </Form.Group>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_GENDER_LABEL} type="text"/>
                    <Textbox label = {constants.REACT_APP_ADDRESS_LABEL} type="text"/>
                    <Textbox label = {constants.REACT_APP_ABHA_ID_LABEL} type="text"/>
                </Form.Group>
                <div className='form-register-button'>
                    <Button label = {constants.REACT_APP_REGISTER_LABEL} onClick={(e) => onRegister(e)}/>
                </div>
                <SuccessModal show = {show} onButtonClick={setShow}/>
            </Form>
        </div>
    )
}

export default RegisterPatient;