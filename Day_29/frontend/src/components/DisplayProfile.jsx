import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayProfile.css';

function DisplayProfile() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		// Get logged-in user's email from localStorage
		const email = localStorage.getItem('userEmail');
		if (!email) {
			setError("No user logged in. Please login first.");
			setLoading(false);
			return;
		}
		axios.get('http://127.0.0.1:3000/getUsersData')
			.then(res => {
				const found = res.data.find(u => u.email === email);
				if (found) {
					setUser(found);
				} else {
					setError("User not found.");
				}
				setLoading(false);
			})
			.catch(err => {
				setError("Failed to fetch user data.",err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div className="profile-container"><div className="profile-card">Loading...</div></div>;
	}
	if (error) {
		return <div className="profile-container"><div className="profile-card error">{error}</div></div>;
	}
	const handleLogout = () => {
		localStorage.removeItem('userEmail');
		window.location.href = '/login';
	};

	const handleDelete = async () => {
		if(window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
			try {
				await axios.delete(`http://127.0.0.1:3000/deleteUser/${user._id}`);
				localStorage.removeItem('userEmail');
				alert('Account deleted successfully!');
				window.location.href = '/signup';
			} catch {
				alert('Failed to delete account.');
			}
		}
	};

	return (
		<div className="profile-container">
			<div className="profile-card">
				<div className="profile-avatar">
					<span>{user.name?.charAt(0)?.toUpperCase()}</span>
				</div>
				<h2 className="profile-name">{user.name}</h2>
				<div className="profile-info">
					<div><strong>Email:</strong> {user.email}</div>
					<div><strong>Mobile:</strong> {user.mobileNumber}</div>
					<div><strong>Password:</strong> {user.password}</div>
				</div>
				<div style={{marginTop: 24, display: 'flex', justifyContent: 'center', gap: '16px'}}>
					<button className="action-btn edit" onClick={handleLogout}>Logout</button>
					<button className="action-btn delete" onClick={handleDelete}>Delete My Account</button>
				</div>
			</div>
		</div>
	);
}

export default DisplayProfile;
