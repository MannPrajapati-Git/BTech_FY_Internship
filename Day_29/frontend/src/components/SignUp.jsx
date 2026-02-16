import React, { useState } from 'react'
import axios from 'axios'
import './SignUp.css'

function SignUp() {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // New state for handling messages
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const submitData = async (e) => {
        e.preventDefault();
        
        // Reset messages before new request
        setMessage("");
        setIsError(false);

        try {
            const res = await axios.post("http://127.0.0.1:3000/addUser", { 
                name, 
                mobileNumber, 
                email, 
                password 
            });

            // If successful
            console.log(res.data);
            setIsError(false);
            setMessage("Signup successfully done! ✅");
            
            // Optional: Clear form
            setName("");
            setMobileNumber("");
            setEmail("");
            setPassword("");

        } catch (err) {
            // If error
            console.error(err);
            setIsError(true);
            // Try to get error message from backend, otherwise generic message
            setMessage(err.response?.data?.message || "Something went wrong! ❌");
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Create Account</h1>
                <p className="signup-subtitle">Join us to get started</p>
                
                {/* Message Box - Only shows if message exists */}
                {message && (
                    <div className={`message-box ${isError ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={submitData} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={name} // value is needed to clear form
                            placeholder='Enter Your Name' 
                            onChange={e => setName(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input 
                            type="number" 
                            name="mobileNumber" 
                            id="mobile"
                            value={mobileNumber}
                            placeholder='Enter Your Mobile Number' 
                            onChange={e => setMobileNumber(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={email}
                            placeholder='Enter Your Email' 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password}
                            placeholder='Enter Your Password' 
                            onChange={e => setPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type='submit' className="signup-btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;