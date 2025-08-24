import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Fallback from './pages/Fallback'
import HomePage from './pages/HomePage'
import Register from './pages/auth/Register'
import LandingPage from './pages/LandingPage'
import AddDiary from './pages/diary/AddDiary'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<LandingPage />}/>

        <Route path='/homepage' element={<HomePage />} />
        <Route path='/homepage/add-diary' element={<AddDiary />}/>

        <Route path='*' element={<Fallback />}/>
      </Routes>
    </div>
  )
}

export default App
