import './App.css';
import {Entry} from './entry'
import { DoctorRegister } from './features/Doctor/doctorRegister/doctorregister';
import { Receptionist } from './features';
import { useState } from "react"
import {DoctorList} from './Doctorview';

import {Button } from './components'
import {Route, Routes, useNavigate} from "react-router-dom";

function App() {

  return (
   <Routes>

<Route path='/' element={<Entry />} />
<Route path='/docregister' element={<DoctorRegister />} />
<Route path='/docregister/view' element={<DoctorList />} />



   </Routes>



  
  );
}
 
export default App;
