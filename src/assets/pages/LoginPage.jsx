import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ Lägg till login-funktion som anropar ditt backend-API
  const login = async (username, email, password) => {
    const res = await fetch("https://your-api.azurewebsites.net/api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Login failed")
    }

    // Spara token t.ex. i localStorage
    localStorage.setItem("token", data.token)
    return data
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await login(formData.username, formData.email, formData.password)
      navigate("/events") // vidare till events-sida
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div id="login" className="portal-wrapper">
      <Nav />
      <Header title="Login" />
      <main className="main login-page">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="btn" type="submit">Log in</button>

          <p>Create Account - <Link to="/signup">Sign Up</Link></p>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage
