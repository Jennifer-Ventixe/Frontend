import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Terms from '../Components/Terms'
import ProhibitedItems from '../Components/ProhibitedItems'


const EventDetailsPage = () => {
  const { id } = useParams()
       const [event, setEvent] = useState({})
  
      const getEvents = async () => {
          const res = await fetch(`https://jennifer-eventservice-dwaudnhbehdmhhfu.swedencentral-01.azurewebsites.net/api/Events/${id}`)
  
          if (res.ok) {
              const response = await res.json()
              setEvent(response.result)
          }
      }
      useEffect(() => {
          getEvents()
  
      }, [])

  return (
       <div className="portal-wrapper">
        <Nav />
        <Header />
        <main className="main event-details-page">
            <div className="event-details-wrapper">
                <div className="event-details">
                    <img src="Images/EventPicture.jpg" alt="Konfetti" className="event-image" />
                    <h1>{event.title}</h1>
                    <h3>{event.date}</h3>
                    <h3>{event.location}</h3>
                    <h3>{event.price} SEK</h3>
                    <div className="about-event">
                        <h3>About Event</h3>
                        <h3>{event.description}</h3>
                    </div>
                    <Link to={`/events/booking/${id}`} className="btn btn-primary">Book Event</Link>
                </div>
            </div>
            <div className="rules">
                <Terms />
                <ProhibitedItems />
            </div>
      
        </main>
        <Footer /> 
    </div>
         
  )
}

export default EventDetailsPage

