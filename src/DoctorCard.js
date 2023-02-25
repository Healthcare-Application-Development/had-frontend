import React from "react";
import "./DoctorList.css"; // import CSS file

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="doctor-info">
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p>{doctor.contact}</p>
        <button>Edit Info</button>
      </div>
    </div>
  );
}

export default DoctorCard;
