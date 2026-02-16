import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // State for handling messages
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Reset states
        setMessage("");
        setIsError(false);
        setIsLoading(true);

        try {
            // Adjust the URL endpoint to match your backend
            const res = await axios.post("http://127.0.0.1:3000/login", { 
                email, 
                password 
            });

            console.log(res.data);
            setIsError(false);
            setMessage("Login Successful! Redirecting...");
            // Store user email for profile
            localStorage.setItem('userEmail', email);
            // Redirect to profile after 1.5 seconds
            setTimeout(() => {
                navigate('/profile');
            }, 1500);

        } catch (err) {
            console.error(err);
            setIsError(true);
            // Get specific error message from backend or use default
            setMessage(err.response?.data?.message || "Invalid Email or Password ❌");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back</h1>
                <p className="login-subtitle">Please enter your details to sign in</p>
                
                {/* Message Box */}
                {message && (
                    <div className={`message-box ${isError ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            placeholder='Enter your email' 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            value={password}
                            placeholder='Enter your password' 
                            onChange={e => setPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type='submit' className="login-btn" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" className="link-text">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;