import React from 'react'
import { Link } from 'react-router-dom'

const BookingItem = ({item}) => {
  return (

    <Link className="cards" to={`/bookings/${item.id}`}>
       <div className="booking-card">
           <img src="Images/EventPicture.jpg" alt="Konfetti" className="booking-image" />
           <h1 className="booking-title">{item.EventId}</h1>
            <p className="firstname">{item.FirstName}{item.LastName}</p>
            <p className="firstname">{item.Email}</p>
            <p className="firstname">{item.StreetName} {item.PostalCode} {item.City}</p>
            <p className="firstname">{item.TicketQuantity} st</p>
           
        </div>
  
    </Link>



  )
}

export default BookingItem
