
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
function App() {
  

  return (
    <div className='containerApp'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
           <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
