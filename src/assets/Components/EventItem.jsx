import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (

    <Link className="cards" to={`/events/${item.id}`}>
       <div className="event-card">
           <img src="Images/EventPicture.jpg" alt="Konfetti" className="event-image" />
           <h1 className="event-title">{item.title}</h1>
            <p className="event-date">{new Date(item.eventDate).toLocaleDateString()}</p>
            <p>{new Date(item.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <div className="event-location">
              <p className="event-location-text" >{item.location}</p>
            </div>
            <p className="event-price">{item.price}</p>
        </div>
  
    </Link>



  )
}

export default EventItem