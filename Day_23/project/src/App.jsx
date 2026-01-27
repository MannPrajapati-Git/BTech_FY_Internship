import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'  
import Display from './components/Display'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ChangePassword from './components/ChangePassword'
import Home from './components/Home'
// import ForgetPassword from './components/ForgetPassword'
import ForgetPassword from './components/ForgotPassword'
import EditProfile from './components/EditProfile'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignUp /> }/>
          <Route path="/home" element={ <Home /> }/>
          <Route path="/display" element={ <Display /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/changepassword" element={<ChangePassword />}/>
          <Route path="/forgetpassword" element={<ForgetPassword />}/>
          <Route path="/editprofile" element={<EditProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
