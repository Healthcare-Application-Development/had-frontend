import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Receptionist, RegisterPatient, ViewPatients, SuperAdmin, CreateHospital } from './features';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/receptionist'>
          <Route index element={<Receptionist />} />
          <Route path='register' element={<RegisterPatient />} />
          <Route path='view' element={<ViewPatients />} />
        </Route>

        <Route path='/super_admin'>
          <Route index element={<SuperAdmin />} />
          <Route path='create_hospital' element={<CreateHospital />} />
        </Route>

      </Routes>
    </div>

    
    
  );
}

export default App;
