import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Signuppage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const register = async (username, email, password) => {
    const res = await fetch("https://jennifer-accountservice-fudzbkh7bvafh9fd.swedencentral-01.azurewebsites.net/api/Account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Registration failed")
    }

    return data
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      await register(formData.username, formData.email, formData.password)
      setSuccess("Account created! Redirecting to login...")
      setTimeout(() => navigate("/login"), 2000)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div id="signup" className="portal-wrapper">
      <Nav />
      <Header title="Sign Up" />
      <main className="main signup-page">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Sign Up</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <input className="form-input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="btn" type="submit">Create Account</button>

          <p>Already have an account? <Link to="/">Log in</Link></p>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Signuppage
