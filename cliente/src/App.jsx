
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";
import Dashboard from './pages/Dashboard.jsx';
import UserDash from  './pages/UserDash.jsx';
import ClienteDash from './pages/ClienteDash.jsx';
import FormProd from "./components/FormProd";
function App() {
  

  return (
    <div className='containerApp'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/home' element={<Home />} />
           <Route path='/dashboard' element={<Dashboard/>} />
           <Route path='/dashboardUser' element={<UserDash/>} />
           <Route path='/dashboardClient' element={<ClienteDash/>} />
           <Route  path='/fomularioProducto' element={<FormProd/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
