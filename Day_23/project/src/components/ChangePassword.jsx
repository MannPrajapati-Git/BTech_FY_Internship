import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function ChangePassword() {

  const [id,setId] = useState('')
  const [currentp, setCurrentp] = useState('')
  const [newp, setNewp] = useState('')
  const [confirmp, setConfirmp] = useState('')

  const navigate = useNavigate()

useEffect(() => {
  const storedId = localStorage.getItem('id');
  if (storedId) {
    setId(storedId);
  }
}, []);



const updatePassword = () =>{

  var updatePassword = new FormData()
  updatePassword.append("st_id",id)
  updatePassword.append("opass",currentp)
  updatePassword.append("npass",newp)
  updatePassword.append("cpass",confirmp)

  axios.post("",updatePassword)
  .then((res) =>{
    console.log(res)
    if(res.data.flag == '1'){
      alert(res.data.message)
      navigate('/home')

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
    <h2 className="auth-title">Change Password</h2>

    <div className="auth-group">
  <label>Student Id</label>
  <input
    type="number"
    value={id}
    readOnly
    placeholder="Student Id"
  />
</div>

    <div className="auth-group">
      <label>Current Password</label>
      <input type="password" onChange={(e)=>setCurrentp(e.target.value)} placeholder="Current password" />
    </div>

    <div className="auth-group">
      <label>New Password</label>
      <input type="password" onChange={(e)=>setNewp(e.target.value)} placeholder="New password" />
    </div>

    <div className="auth-group">
      <label>Confirm New Password</label>
      <input type="password" onChange={(e)=>setConfirmp(e.target.value)} placeholder="Confirm new password" />
    </div>

    <button className="auth-btn" onClick={updatePassword}>Update Password</button>

    <div className="auth-footer">
      <a href="/login">Back to Login</a>
    </div>
  </div>
  <br />
 
</div>

        </>
    )
}

export default ChangePassword