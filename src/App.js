import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Login, Receptionist, RegisterPatient, ViewPatients ,AdminHome} from './features';
import RegisterDoctor from './features/Admin/RegisterDoctor/RegisterDoctor';
import RegisterReceptionist from './features/Admin/RegisterReceptionist/RegisterReceptionist';


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
      
        <Route path='/admin'>
          <Route index element={<AdminHome />} />
          <Route path='registerdoctor' element={<RegisterDoctor />} />
          <Route path='registerreceptionist' element={<RegisterReceptionist />} />
        </Route>



      </Routes>
    </div>
    
  );
}

export default App;
