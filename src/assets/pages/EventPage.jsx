import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import EventList from '../Components/EventList'

const EventPage = () => {
   const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header title="Events" user={user} />
        <main className="main">
           <EventList />
        </main>
        <Footer /> 
    </div>
  )
}

export default EventPage