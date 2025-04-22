import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import bg from '../assets/registerFormBg.jpg'

function Register() {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
  }
  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-5 p-3 p-md-0">
        <form className="border shadow rounded-2 p-5 w-100 bg-light">
          <h4 className="text-center mb-3 fs-2">Register at PawMart</h4>

          {/* 🐾 Friendly tagline */}
          <p className="text-center">
            🐾 "Ready to join the pack? Let’s get you signed up!"
          </p>
          <div className="mb-3">
            <input
              id="regemail"
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
          </div>

          <div className="mb-3">
            <input
              id="regusername"
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <input
              id="regpswd"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <input
              id="cpswd"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-3">
            <button type="button" className="btn w-100 text-white" style={{ backgroundColor: '#EF8714' }}>
              Register
            </button>
          </div>

          <span className="text-dark">
            Already a member? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <div className='col-md-5'></div>
    </div>
  )
}

export default Register