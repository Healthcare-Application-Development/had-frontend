import React from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorList.css";
import { Receptionist } from './features';

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    contact: "123-456-7890",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Dermatology",
    contact: "234-567-8901",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. David Lee",
    specialty: "Ophthalmology",
    contact: "345-678-9012",
    image: "https://via.placeholder.com/150",
  },
];

export function DoctorList() {
  return (
    
    <div>
        <div>  <Receptionist />  </div>
     
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
