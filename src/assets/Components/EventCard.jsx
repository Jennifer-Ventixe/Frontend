import React from 'react'

const EventCard = () => {
  return (
    <div className="Event-card">
        <img src="./Images/EventPicture.jpeg" alt="Konfetti" />
        <div className="Event-card-content">
            <h3>{}</h3>
            <p>Event description goes here. It should be brief and engaging.</p>
            <button className="btn">Read More</button>
        </div>
    </div>
  )
}

export default EventCard