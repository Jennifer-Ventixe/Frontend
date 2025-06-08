import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Terms from '../Components/Terms'
import ProhibitedItems from '../Components/ProhibitedItems'

const BookEventPage = () => {
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    getEvent()
  }, [])

  const getEvent = async () => {
    try {
      const res = await fetch(`https://jennifer-eventservice-dwaudnhbehdmhhfu.swedencentral-01.azurewebsites.net/api/Events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event")

      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
      setError("Could not load event information.")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch(`https://jennifer-bookingservice-hzg5gyd8fkekb3ct.swedencentral-01.azurewebsites.net/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!res.ok) {
      console.error("Failed to book event")
      setError("Booking failed. Please try again.")
    } else {
      console.log("Booking successful")
      setSuccess(true)
    
      setTimeout(() => navigate('/events'), 3000)
    }
  } catch (err) {
    console.error("Error during booking:", err)
    setError("An error occurred while booking.")
  }
}


  return (
    <div className="portal-wrapper">
      <Nav />
      <Header title="Book Event" />
      <main className="main">
        <div>
          <form onSubmit={handleSubmit} noValidate className="form-container">
            <div className="event-form">
                <h1>Book Event - {event.title || "Loading..."}</h1>
                {success && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                  Your booking has been confirmed! Redirecting...
                </p>
              )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
             
             <div className="info-wrapper">
             <div className="event-name">  
              <div className="event-form">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                 placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-form">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                 placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-form">
              <label>Email</label>
              <input
                type="email"
                name="email"
                 placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            </div>

            <div className="event-address">
                 <div className="event-form">
              <label>Street Name</label>
              <input
                type="text"
                name="streetName"
                 placeholder="Street Name"
                value={formData.streetName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-form">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                 placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-form">
              <label>City</label>
              <input
                type="text"
                name="city"
                  placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

          
            </div>
            </div>
           

           <div className="event-form">
              <label>Ticket Quantity</label>
              <input
                type="number"
                name="ticketQuantity"
                min="1"
                value={formData.ticketQuantity}
                onChange={handleChange}
                required/>
            </div>

            <button type="submit" className="btn">Book Now</button>
          </form>
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

export default BookEventPage
