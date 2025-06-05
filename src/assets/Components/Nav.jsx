import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/" >Events</NavLink>
    </nav>
  )
}

export default Nav