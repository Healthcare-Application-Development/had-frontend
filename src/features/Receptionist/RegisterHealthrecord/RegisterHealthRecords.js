import React, { useState } from 'react';
import './RegisterHealthRecords.css';

function RegisterHealthRecords() {
  const [complaintType, setComplaintType] = useState('');
  const [abhaID, setAbhaID] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

 
    const formData = {
      complaintType: complaintType,
      abhaID: abhaID,
      description: description,
     
    };

    try {
      
      const response = await fetch('API_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="health-form-container">
      <h1 className="health-form-title">Health Record Form</h1>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="health-form">
        <label className="health-form-label">Record Type</label>
        <select
          id="complaintType"
          value={complaintType}
          onChange={(event) => setComplaintType(event.target.value)}
          className="health-form-select"
        >
          <option value="">-- Select Complaint Record type --</option>
          <option value="X-ray">X-ray</option>
          <option value="Heart">Heart</option>
          <option value="Blood">Blood</option>
          <option value="others">Others</option>
        </select>

        <input
          id="abhaID"
          type="text"
          placeholder="abhaID"
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
