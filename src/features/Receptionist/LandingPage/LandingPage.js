import React, { useEffect } from 'react';
import { OptionsBox } from '../../../components';
import { constants } from '../../../constants';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const user = localStorage.getItem("user");
    var name = 'Rahul';
    if (user) {
        name = JSON.parse(user).name
    }
    const navigate = useNavigate();
    useEffect(() => {
        const login = JSON.parse(localStorage.getItem("user"));
        if (!login || login.role !== "RECEPTIONIST") {
            navigate("/");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return;
        }
    }, [])
    return (
        <div className='landing-page-container'>
            <p className='landing-page-heading'>{constants.REACT_APP_WELCOME_LABEL}</p>
            <p className='landing-page-heading'>{constants.REACT_APP_WHAT_TO_DO_LABEL}</p>
            <div className='landing-page-options-container'>
                <OptionsBox label = {constants.REACT_APP_ADD_PATIENT_LABEL} url = '/receptionist/register' />
                <OptionsBox label = "Add Record" url = '/receptionist/healthrecord' />
            </div>
        </div>
    )
}

export default LandingPage;