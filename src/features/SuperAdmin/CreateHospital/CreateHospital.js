import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../../components';
import './CreateHospital.css';
import { constants } from '../../../constants';


function CreateHospital() {
    const [show, setShow] = useState(false);
    const onRegister = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div className='sup-container'>
            <p className='sup-heading'>{constants.REACT_APP_CREATE_HOSPITAL_HEADING_LABEL}</p>
            <p className='sup-second-heading'>{constants.REACT_APP_CURRENT_HOSPITAL_LABEL}</p>

            <Dropdown className='sup-drop-down'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {constants.REACT_APP_HOSPITAL_DROPDOWN_LABEL}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">123456</Dropdown.Item>
                <Dropdown.Item href="#/action-2">123456</Dropdown.Item>
                <Dropdown.Item href="#/action-3">123456</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Form>
                <Form.Group className="mb-4 sup-group-style" >
                    <Textbox label = {constants.REACT_APP_HOSPITAL_NAME_LABEL} type="text"/>
                    <Textbox label = {constants.REACT_APP_ADMIN_NAME_LABEL} type="text"/>
                    <Textbox label = {constants.REACT_APP_ADMIN_EMAIL_LABEL} type="email"/>
                    <Textbox label = {constants.REACT_APP_ADMIN_PHONE_LABEL} type="phone"/>
                </Form.Group>
                
                <div className='sup-register-button'>
                    <Button label = {constants.REACT_APP_CREATE_HOSPITAL_LABEL} onClick={(e) => onRegister(e)}/>
                </div>
                <SuccessModal show = {show} onButtonClick={setShow}/>
            </Form>
        </div>
    )
}

export default CreateHospital;