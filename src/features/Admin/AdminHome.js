import '../../App.css';
import { Receptionist } from '..'
import { useState } from "react"
import {Button } from '../../components'
import { useNavigate } from 'react-router-dom';

export function AdminHome(){
    const navigate=useNavigate();

    const [topping, setTopping] = useState("Doctor")
  
    const onOptionChange = e => {
      setTopping(e.target.value)
    }
  
  function goto(){
    if(topping==='Doctor')
    navigate('/admin/registerdoctor')
    else
    navigate('/admin/registerreceptionist')

  }
return(
<div>
   

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
      Select Category :   <b>{topping}</b>
    </p>

<div className="inputfiled"><Button label="Submit" onClick={()=>goto()} /></div>
  </div></div>




  </div>


)

}
export default AdminHome;