import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Bookinglist from '../Components/Bookinglist'

const BookingsPage = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header title="bookings"/>
        <main className="main">
           <Bookinglist />
        </main>
        <Footer /> 
    </div>
  )
}

export default BookingsPage