import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Receptionist, RegisterPatient, ViewPatients } from './features';

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
      </Routes>
    </div>
    
  );
}

export default App;
