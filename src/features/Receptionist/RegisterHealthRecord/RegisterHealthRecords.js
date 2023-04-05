import React, { useEffect, useState } from 'react';
import './RegisterHealthRecords.css';
import AESUtils from '../../../encryption/AESUtils';
import { useNavigate } from 'react-router-dom';

function RegisterHealthRecords() {
  const [healthRecordType, setHealthRecordType] = useState('');
  const [abhaID, setAbhaID] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
      const login = JSON.parse(localStorage.getItem("user"));
      if (!login || login.role !== "RECEPTIONIST") {
          navigate("/");
          return;
      }
      if (login || login.role === "RECEPTIONIST") {
          navigate("/receptionist/healthrecord");
      }
  }, [])
  const recordTypes = {
    1: "Blood Report",
    2: "X-ray",
    3: "MRI Scanning",
    4: "General Observations",
    5: "Medicines",
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

 
    const formData = {
      recordType: AESUtils.encrypt(healthRecordType),
      abhaId: AESUtils.encrypt(abhaID),
      description: AESUtils.encrypt(description),
      timestamp: new Date().toISOString()
    };

    try {
      
      const response = await fetch(`${process.env.REACT_APP_API_URL}/patientHealthRecord/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem("token")
        }, 
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Health record submitted successfully.');
      } else {
        setErrorMessage('Failed to submit health record.');
      }
    } catch (error) {
      setErrorMessage('Failed to submit health record: ' + error.message);
    }
  };

  return (
    <div className="health-form-container">
      <div className="health-form-title">Health Record Form</div>
      {successMessage && (
        <div className="alert-health alert-success-health" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert-health alert-danger-health" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="health-form">
        <select
          id="healthRecordType"
          value={healthRecordType}
          onChange={(event) => setHealthRecordType(event.target.value)}
          className="health-form-select"
        >
        <option value="">-- Select Health Record type --</option>
        {recordTypes && Object.keys(recordTypes).map((element) => {
          return (
            <option value={recordTypes[element]}>{recordTypes[element]}</option>
          )
        })}
        </select>

        <input
          id="abhaID"
          type="text"
          placeholder="ABHA ID"
          value={abhaID}
          onChange={(event) => setAbhaID(event.target.value)}
          className="health-form-input"
        />

        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="health-form-textarea"
        ></textarea>

        <button type="submit" className="health-form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterHealthRecords;
