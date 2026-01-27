import React from 'react'
import Navbar from './Navbar'
import '../App.css'

export default function Home() {

  const name = localStorage.getItem('name')

  return (
    <>
      <Navbar />

      <div className="home-wrapper">
        <div className="home-card">
          
          <div className="home-avatar">
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </div>

          <h1 className="home-title">
            Welcome Back 👋
          </h1>
          <h2 className="home-username">
            {name}
          </h2>

          <p className="home-subtitle">
            We’re glad to see you again.  
            Let’s continue your journey 🚀
          </p>

          <button className="home-btn" onClick={() => window.location.href = '/display'}>
            Go to Display
          </button>

        </div>
      </div>
    </>
  )
}
