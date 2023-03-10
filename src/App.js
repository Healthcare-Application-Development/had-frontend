import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Login, Receptionist, RegisterPatient, ViewPatients } from './features';
import {Entry} from './features/Admin/AdminHome'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/receptionist'>
          <Route index element={<Receptionist />} />
          <Route path='register' element={<RegisterPatient />} />
          <Route path='view' element={<ViewPatients />} />
        </Route>
        <Route path='/admin' element={<Entry />} />
      </Routes>
    </div>
    
  );
}

export default App;
