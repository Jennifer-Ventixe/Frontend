import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="./Images/ventixe-logo.svg" alt="Ventixe logo" />
        <h1>Ventixe</h1>
      </div>
      
        <NavLink className="navlink" to="/" >
        <img src="./Images/Events.svg" alt="Ticket" />
        <p>Dashboard</p>
        </NavLink>

        <NavLink className="navlink" to="/" >
        <img src="./Images/Events.svg" alt="Ticket" />
        <p>Events</p>
        </NavLink>

        <NavLink className="navlink" to="/" >
        <img src="./Images/Events.svg" alt="Ticket" />
        <p>Bookings</p>
        </NavLink>

        <NavLink className="navlink" to="/" >
        <img src="./Images/Events.svg" alt="Ticket" />
        <p>Gallery</p>
        </NavLink>

        <NavLink className="navlink" to="/" >
        <img src="./Images/Events.svg" alt="Ticket" />
        <p>Feedback</p>
        </NavLink>  
    </nav>
  )
}

export default Nav