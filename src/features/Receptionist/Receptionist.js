import React, { useEffect } from 'react';
import { LandingPage } from '../';
import { useNavigate } from 'react-router-dom';

function Receptionist() {
    const navigate = useNavigate();
    useEffect(() => {
        const login = JSON.parse(localStorage.getItem("user"));
        if (!login || login.role !== "RECEPTIONIST") {
            navigate("/");
            return;
        }
        if (login || login.role === "RECEPTIONIST") {
            navigate("/receptionist");
        }
    }, [])
    return (
        <div>
            <LandingPage />
        </div>
    )
}

export default Receptionist;