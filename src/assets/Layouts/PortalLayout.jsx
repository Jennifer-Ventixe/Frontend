import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const PortalLayout = () => {
  return (
        <div className="portal-wrapper">
            <Nav />
            <Header />
        <main>
            <Outlet />
        </main>
        <Footer />

    </div>
  )
}

export default PortalLayout