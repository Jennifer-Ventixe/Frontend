import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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

 
            <div className="event-details">
               <h1>{event.title}</h1>
               <h3>{event.description}</h3>
               <Link to={`/events/booking/${id}`} className="btn btn-primary">Book Event</Link>
            </div>
      

    
   
  )
}

export default EventDetailsPage