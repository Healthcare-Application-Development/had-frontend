import './App.css';
import { Receptionist } from './features';
import { DoctorRegister } from './features/Doctor/doctorRegister/doctorregister';
import { useState } from "react"

import {Button } from './components'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';

export function Entry(){
    const navigate=useNavigate();

    const [topping, setTopping] = useState("Doctor")
  
    const onOptionChange = e => {
      setTopping(e.target.value)
    }
  
  function goto(){
    navigate('/docregister')
  }
return(
    <div>
    <Receptionist />  

  <div><div className="App">
    <h2>Select the Entity to Register</h2>
<div className="radio"><input
      type="radio"
      name="category"
      value="Doctor"
      id="doctor"
      checked={topping === "Doctor"}
      onChange={onOptionChange}
    />
    <label className="label"  htmlFor="doctor"> Doctor </label></div>
    
<div className="radio"><input
      type="radio"
      name="category"
      value="Receptionist"
      id="mrecptionist"
      checked={topping === "Receptionist"}
      onChange={onOptionChange}
    />
    <label className="label" htmlFor="receptionist"> Receptionist</label></div>
    

  

    <p>
      Select Category :   <strong>{topping}</strong>
    </p>

<div className="inputfiled"><Button label="Submit" onClick={()=>goto()} /></div>
  </div></div>




  </div>


)

}