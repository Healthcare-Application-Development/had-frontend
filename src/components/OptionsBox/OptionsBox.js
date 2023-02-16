import React from 'react';
import { useNavigate } from 'react-router-dom';

import './OptionsBox.css';

function OptionsBox(props) {
    const navigate = useNavigate();

    return (
        <div className='landing-page-box' onClick={() => navigate(props.url)}>
            <span>{props.label}</span>
        </div>
    )
}

export default OptionsBox;