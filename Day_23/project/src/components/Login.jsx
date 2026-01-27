import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()


  const submitData = () => {  

    var loginData = new FormData()
    loginData.append("st_email", email)
    loginData.append("st_password", password)

    axios.post("",loginData)
    .then((res) => {
      console.log(res)
      if (res.data.flag == '1') {
        localStorage.setItem('token',res.data.access_token)
        localStorage.setItem('name',res.data.st_name)
        localStorage.setItem('id',res.data.st_id)
        alert(res.data.message)
        // window.location.href = '/home'
        navigate('/home')
      }
    })
    
    .catch((error) => console.log(error))



  }



  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>

          <div className="auth-group">
            <label>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
          </div>

          <button className="auth-btn" onClick={submitData}>Login</button>

          <div className="auth-footer">
            <a href="/forgetpassword">Forgot Password?</a><br />
            New user? <a href="/">Create account</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login