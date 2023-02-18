import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { Textbox, Button, SuccessModal } from '../../../components';
import './CreateHospital.css';


function CreateHospital() {
    const [show, setShow] = useState(false);
    const onRegister = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div className='sup-container'>
            <p className='sup-heading'>Create Hospital Instance</p>
            <p className='sup-second-heading'>Current Hospitals</p>

            <Dropdown className='sup-drop-down'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Hospitals (By ID)
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">123456</Dropdown.Item>
                <Dropdown.Item href="#/action-2">123456</Dropdown.Item>
                <Dropdown.Item href="#/action-3">123456</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Form>
                <Form.Group className="mb-4 sup-group-style" >
                    <Textbox label = "Hospital Name" type="text"/>
                    <Textbox label = "Administrator Name" type="text"/>
                    <Textbox label = "Administrator Email" type="email"/>
                    <Textbox label = "Administrator Phone" type="phone"/>
                </Form.Group>
                
                <div className='sup-register-button'>
                    <Button label = "Create Hospital" onClick={(e) => onRegister(e)}/>
                </div>
                <SuccessModal show = {show} onButtonClick={setShow}/>
            </Form>
        </div>
    )
}

export default CreateHospital;