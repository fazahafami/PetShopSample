import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Login() {
  const backgroundStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907024.jpg?semt=ais_hybrid&w=740')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
  }
  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center vh-100">
      <div className='col-md-5'></div>
      <div className="col-md-5 p-3 p-md-0">
        <form className="border shadow rounded-2 p-5 w-100 bg-light">
          <h4 className="text-center mb-3 fs-2">Login to PawMart</h4>

          {/* 🐾 Friendly tagline */}
          <p className="text-center">
            🐾 "Welcome back, loyal companion! Let’s get you back to shopping!"
          </p>

          <div className="mb-3">
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <input
              id="pswd"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <button type="button" className="btn w-100 text-white" style={{ backgroundColor: '#EF8714' }}>
              Login
            </button>
          </div>

          <span className="text-dark">
            Are you a New User? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
