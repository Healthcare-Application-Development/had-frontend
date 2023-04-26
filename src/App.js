import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Login, Receptionist, RegisterPatient, AdminHome} from './features';
import RegisterDoctor from './features/Admin/RegisterDoctor/RegisterDoctor';
import RegisterReceptionist from './features/Admin/RegisterReceptionist/RegisterReceptionist';
import RegisterHealthRecords from './features/Receptionist/RegisterHealthRecord/RegisterHealthRecords';
import { ProtectedRoute } from './utils/ ProtectedRoute';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/receptionist'>
          <Route index element={<ProtectedRoute><Receptionist /></ProtectedRoute>} />
          <Route path='register' element={<ProtectedRoute><RegisterPatient /></ProtectedRoute>} />
          <Route path='healthrecord' element={<ProtectedRoute><RegisterHealthRecords /></ProtectedRoute>} />
        </Route>
      
        <Route path='/admin'>
          <Route index element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
          <Route path='registerdoctor' element={<ProtectedRoute><RegisterDoctor /></ProtectedRoute>} />
          <Route path='registerreceptionist' element={<ProtectedRoute><RegisterReceptionist /></ProtectedRoute>} />
        </Route>



      </Routes>
    </div>
    
  );
}

export default App;
