import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function ForgotPassword() {

  const [email, setEmail] = useState('')

  const navigate = useNavigate()

const UpdatePassword = () => {
 
  var pass = new FormData()
  pass.append("st_email",email)
  
  axios.post("",pass)
  .then((res) =>{
    console.log(res)
    if(res.data.flag == '1'){
      alert(res.data.message)
      navigate('/login')
    }
  })
  .catch((error) => {
    console.log(error)  
  })
}



    return (
        <>
            <Navbar />
  <div className="auth-wrapper">

  <div className="auth-card">
    <h2 className="auth-title">Forget Password</h2>



    <div className="auth-group">
      <label>Enter Email</label>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Confirm new password" />
    </div>

    <button className="auth-btn" onClick={UpdatePassword}>Show Password</button>

    <div className="auth-footer">
      <a href="/login">Back to Login</a>
    </div>
  </div>
</div>

        </>
    )
}

export default ForgotPassword