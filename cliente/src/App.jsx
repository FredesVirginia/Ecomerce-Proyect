
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";
import Dashboard from './pages/Dashboard.jsx';
function App() {
  

  return (
    <div className='containerApp'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/home' element={<Home />} />
           <Route path='/dashboard' element={<Dashboard/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
