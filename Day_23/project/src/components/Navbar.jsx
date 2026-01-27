import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <Link className="btn" to="/home">Home</Link>
                    <Link className="btn" to="/">SignUp</Link>
                    <Link className="btn" to="/login">Login</Link>
                    <Link className="btn" to="/display">Display</Link>
                    <Link className="btn" to="/changepassword">CP</Link>
                    <Link className="btn" to="/forgetpassword">FP</Link>
                    <Link className="btn" to="/editprofile">EP</Link>
                    <svg
                        className="outline"
                        overflow="visible"
                        width="400"
                        height="60"
                        viewBox="0 0 400 60"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="rect"
                            pathLength="100"
                            x="0"
                            y="0"
                            width="400"
                            height="60"
                            fill="transparent"
                            strokeWidth="5"
                        ></rect>
                    </svg>
                </div>
            </div>

        </>
    )
}

export default Navbar   