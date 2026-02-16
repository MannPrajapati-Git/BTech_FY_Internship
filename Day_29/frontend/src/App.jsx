import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Login from './components/Login'

import DisplayProfile from './components/DisplayProfile'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<DisplayProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </>
  )
}

export default App
