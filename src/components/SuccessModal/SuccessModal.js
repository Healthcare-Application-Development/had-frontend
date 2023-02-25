import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';

import './SuccessModal.css';

function SuccessModal(props) {
    return (
        <Modal show={props.show} centered>
            <Modal.Body className='modal-body-style'>
                <p className='modal-header-style'>{process.env.REACT_APP_SUCCESS_LABEL}</p>
                <img src={process.env.PUBLIC_URL + `/${process.env.REACT_APP_SUCCESS_IMG}.png`} alt={process.env.REACT_APP_SUCCESS_IMG} className='modal-success-img'/>
                <div className='modal-close-btn'>
                    <Button label = {process.env.REACT_APP_CLOSE_LABEL} onClick={() =>  props.onButtonClick()}/>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SuccessModal;