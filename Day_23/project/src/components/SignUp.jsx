import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import '../App.css'

function SignUp() {


  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [password, setPassword] = useState('')

  const submitData = () => {

    var myData = new FormData()
    myData.append("st_name", name)
    myData.append("st_gender", gender)
    myData.append("st_email", email)
    myData.append("st_mobileno", mobileno)
    myData.append("st_password", password)



    axios.post("",myData)
      .then((res) => {
        console.log(res)
        if (res.data.flag == '1') {
          alert(res.data.message)
          localStorage.setItem('name',name)
        }
      })

      .catch((error) => console.log(error))


  }
  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2 className="auth-title">Create Account</h2>

          <div className="auth-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" onChange={(e) => { setName(e.target.value) }} />
          </div>


          <div className="auth-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" onChange={(e) => { setMobileno(e.target.value) }} />
          </div>
          <div className="auth-group">
            <label>Gender</label>
            <input type="text" placeholder="Enter gender" onChange={(e) => { setGender(e.target.value) }} />
          </div>

          <div className="auth-group">
            <label>Email</label>
            <input type="text" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input type="text" placeholder="Create password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>


          {/* <button className="auth-btn" onClick={submitData}>Sign Up</button> */}
          <input type="button" className="auth-btn" onClick={submitData} value="Sign Up" />

          {/* <div className="auth-footer">
            Already have an account? <a href="/login">Login</a>
          </div> */}
        </div>
      </div>


    </>
  )
}

export default SignUp