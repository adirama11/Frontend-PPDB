import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Nilai from './components/Nilai';
import Pendaftar from './components/Pendaftar';
import Ujian from './components/Ujian';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/nilai' element={<Nilai />}/>
        <Route path='/profil' element={<Pendaftar />}/>
        <Route path='/ujian' element={<Ujian />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
