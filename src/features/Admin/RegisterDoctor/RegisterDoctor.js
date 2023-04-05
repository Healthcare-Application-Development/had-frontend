import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../../components';
import './RegisterDoctor.css';
import { constants } from '../../../constants';
import { useNavigate } from 'react-router-dom';

function RegisterDoctor() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [abhaID, setAbhaID] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const login = JSON.parse(localStorage.getItem("user"));
        if (!login || login.role !== "ADMIN") {
            navigate("/");
            return;
        }
        if (login && login.role === "ADMIN") {
            navigate("/admin/registerdoctor")
        }
    }, [])
    const onRegister = (e) => {
        e.preventDefault();
        const createObj = {
            name,
            email,
            gender,
            address
        }

        createObj["phoneNo"] = phone;
        createObj["login"] = null;
        createObj["npciID"] = abhaID;

        fetch(`${process.env.REACT_APP_API_URL}/doctor/add`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body:JSON.stringify(createObj)
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
            <p className='form-heading'>{constants.REACT_APP_ADMIN_DOCTOR_REGISTRATION}</p>
            <Form>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_NAME_LABEL} type="text" onChange={(e) => setName(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_EMAIL_LABEL} type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_PHONE_NO_LABEL} type="phone" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4 form-group-style" >
                    <Textbox label = {constants.REACT_APP_GENDER_LABEL} type="text" onChange={(e) => setGender(e.target.value)}/>
                    <Textbox label = {constants.REACT_APP_ADDRESS_LABEL} type="text" onChange={(e) => setAddress(e.target.value)}/>
                    <Textbox label = "NPCI ID" type="text" onChange={(e) => setAbhaID(e.target.value)}/>
                </Form.Group>
                <div className='form-register-button'>
                    <Button label = {constants.REACT_APP_REGISTER_LABEL} onClick={(e) => onRegister(e)}/>
                </div>
                <SuccessModal show = {show} onButtonClick={setShow}/>
            </Form>
        </div>
    )
}

export default RegisterDoctor;