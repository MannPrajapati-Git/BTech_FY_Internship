import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Get user id from URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) {
            setMessage('No user selected.');
            setLoading(false);
            return;
        }
        axios.get('http://127.0.0.1:3000/getUsersData')
            .then(res => {
                const found = res.data.find(u => u._id === id);
                if (found) setUser(found);
                else setMessage('User not found.');
                setLoading(false);
            })
            .catch(() => {
                setMessage('Failed to fetch user data.');
                setLoading(false);
            });
    }, []);

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/updateUser/${user._id}`, user);
            setMessage('Profile updated!');
            setTimeout(() => navigate('/'), 1200);
        } catch {
            setMessage('Update failed!');
        }
    };

    if (loading) return <div style={{padding:40}}>Loading...</div>;
    if (!user) return <div style={{padding:40}}>{message}</div>;

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Edit Profile</h1>
                {message && <div className="message-box success">{message}</div>}
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={user.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="number" name="mobileNumber" value={user.mobileNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="signup-btn">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
