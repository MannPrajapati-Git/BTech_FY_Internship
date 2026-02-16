import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/getUsersData")
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [])

    return (
        <div className="home-main">
            <div className="table-card">
                <div className="card-header">
                    <h2>User Database</h2>
                </div>
                
                <div className="table-content">
                    {loading ? (
                        <p className="status-text">Loading...</p>
                    ) : (
                        <table className="clean-table">
                            <thead>
                                <tr>
                                    <th style={{width: '5%'}}>#</th>
                                    <th style={{width: '20%'}}>Name</th>
                                    <th style={{width: '20%'}}>Mobile</th>
                                    <th style={{width: '30%'}}>Email</th>
                                    <th style={{width: '25%'}}>Password</th>
                                    <th style={{width: '15%'}}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id || index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.mobileNumber}</td>
                                        <td className="break-text">{user.email}</td>
                                        <td className="break-text">{user.password}</td>
                                        <td>
                                            <button
                                                className="action-btn edit"
                                                onClick={() => window.location.href = `/editprofile?id=${user._id}`}
                                            >Edit</button>
                                            <button
                                                className="action-btn delete"
                                                onClick={async () => {
                                                    if(window.confirm('Are you sure you want to delete this user?')) {
                                                        try {
                                                            await axios.delete(`http://127.0.0.1:3000/deleteUser/${user._id}`);
                                                            setUsers(users.filter(u => u._id !== user._id));
                                                        } catch (err) {
                                                            alert('Delete failed');
                                                        }
                                                    }
                                                }}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;