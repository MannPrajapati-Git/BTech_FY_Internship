import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function EditProfile() {
    const id = localStorage.getItem('id') || '';
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [mobileno, setMobileno] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('id')
        if (token && id) {
            axios.get('', { headers: { 'Authorization': `Bearer ${token}` } })
                .then((res) => {
                    const user = res.data.student_list.find(student => student.st_id == id)
                    if (user) {
                        setName(user.st_name || '')
                        setGender(user.st_gender ? user.st_gender.toLowerCase() : '')
                        setEmail(user.st_email || '')
                        setMobileno(user.st_mobileno || '')
                    }
                })
                .catch((error) => console.log(error))
        }
    }, [])

    const updateProfile = () => {
        const updateData = new FormData()
        updateData.append("st_id", id)
        updateData.append("st_name", name)
        updateData.append("st_gender", gender)
        updateData.append("st_email", email)
        updateData.append("st_mobileno", mobileno)

        axios.post("", updateData)
            .then((res) => {
                console.log(res)
                if (res.data.flag === '1') {
                    alert('successfully updated')
                    localStorage.setItem('name', name) 
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
                    <h2 className="auth-title">Edit Profile</h2>

                    <div className="auth-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter full name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="auth-group">
                        <label>Phone Number</label>
                        <input 
                            type="text" 
                            placeholder="Enter phone number" 
                            value={mobileno} 
                            onChange={(e) => setMobileno(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="auth-group">
                        <label>Gender</label>
                        <select 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)}
                            required
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none', fontSize: '14px' }}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="auth-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>

                    <button className="auth-btn" onClick={updateProfile}>Update Profile</button>
                </div>
            </div>
        </>
    )
}