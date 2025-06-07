import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import EventList from '../Components/EventList'

const EventPage = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header title="asdsa"/>
        <main className="main">
           <EventList />
        </main>
        <Footer /> 
    </div>
  )
}

export default EventPage