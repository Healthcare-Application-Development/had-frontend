import React from 'react';
import { OptionsBox } from '../../../components';
import { constants } from '../../../constants';
import './LandingPage.css';

function LandingPage() {
    const name = 'Rahul';
    return (
        <div className='landing-page-container'>
            <p className='landing-page-heading'>{constants.REACT_APP_WELCOME_LABEL + ' ' + name}</p>
            <p className='landing-page-heading'>{constants.REACT_APP_WHAT_TO_DO_LABEL}</p>
            <div className='landing-page-options-container'>
                <OptionsBox label = {constants.REACT_APP_ADD_PATIENT_LABEL} url = '/receptionist/register' />
                <OptionsBox label = {constants.REACT_APP_VIEW_PATIENTS_LABEL} url = '/receptionist/view' />
            </div>
        </div>
    )
}

export default LandingPage;