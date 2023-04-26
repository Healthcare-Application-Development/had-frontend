import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../../components';
import './RegisterPatient.css';
import { constants } from '../../../constants';
import { useNavigate } from 'react-router-dom';

function RegisterPatient() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onRegister = (e) => {
        e.preventDefault();
        data["login"] = null;
        fetch(`${process.env.REACT_APP_API_URL}/patient/add`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("token") 
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then((data) => {
            if (data.status == 200) {
                setShow(true);
            }
          })
        
    }

    return (
        <div className='form-container'>
            <p className='form-heading'>{constants.REACT_APP_PATIENT_REGISTRATION_HEADING}</p>
            <Form id="registration_form">
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox onChange={updateData} name="name" label = {constants.REACT_APP_NAME_LABEL} type="text"/>
                    <Textbox onChange={updateData} name="email" label = {constants.REACT_APP_EMAIL_LABEL} type="email"/>
                    <Textbox onChange={updateData} name="phoneNo" label = {constants.REACT_APP_PHONE_NO_LABEL} type="phone"/>
                </Form.Group>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox onChange={updateData} name="gender" label = {constants.REACT_APP_GENDER_LABEL} type="text"/>
                    <Textbox onChange={updateData} name="address" label = {constants.REACT_APP_ADDRESS_LABEL} type="text"/>
                    <Textbox onChange={updateData} name="abhaID" label = {constants.REACT_APP_ABHA_ID_LABEL} type="text"/>
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