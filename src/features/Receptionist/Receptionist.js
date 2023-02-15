import React from 'react'
import { Header } from '../../components';
import  { RegisterPatient } from '../';

function Receptionist() {
    return (
        <div>
            <Header />
            <div>
                <RegisterPatient />
            </div>
        </div>
    )
}

export default Receptionist;