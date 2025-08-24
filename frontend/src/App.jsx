import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Fallback from './pages/Fallback'
import HomePage from './pages/HomePage'
import Register from './pages/auth/Register'
import LandingPage from './pages/LandingPage'
import AddDiary from './pages/diary/AddDiary'
import NavBar from './components/NavBar'
import EnterEmail from './pages/auth/forgotPassword/EnterEmail'
import UpdatePass from './pages/auth/forgotPassword/UpdatePass'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<EnterEmail />}/>
        <Route path='/new-password' element={<UpdatePass />}/>
        <Route path='/' element={<LandingPage />}/>

        <Route element={<NavBar />}>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/homepage/add-diary' element={<AddDiary />}/>   
        </Route>

        <Route path='*' element={<Fallback />}/>
      </Routes>
    </div>
  )
}

export default App
