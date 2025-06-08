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
       <Header title="Event details"/>
        <main className="main event-details-page">
            <div className="event-details-wrapper">
                <img src="/Images/EventPicture.jpg" alt="Konfetti" className="event-image" />
                <div className="event-details">
                    <h1>{event.title}</h1>     
                   <div div className="event-info">
                        <div className="location"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <p>{event.location}</p>
                        </div>
                        <p className="price"> {event.currency}{event.price}</p>
                    </div>
                       
                    <div className="about-event">
                        <p className="about">About Event</p>
                        <p className="about-description">{event.description}</p>
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

