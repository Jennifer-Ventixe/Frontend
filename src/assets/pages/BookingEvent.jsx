import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEvent = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({ 
        eventId: id,
         firstName: '', 
         lastName: '', 
         email: '', 
         street: '', 
         postalCode: '', 
         city: '',
         ticketQuantity: 1
        })

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
                }               
     }
     

        const postBooking = async () => {
            try {
                const res = await fetch('https://jennifer-eventservice-dwaudnhbehdmhhfu.swedencentral-01.azurewebsites.net/api/Bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (!res.ok) throw new Error("Failed to book event")

                const data = await res.json()
                console.log("Booking successful:", data)
                navigate('/')
            } catch (err) {
                console.error(err)
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
                    } else {
                        console.log("Booking successful")
                        navigate('/')
                    }
                } catch (err) {
                    console.error("Error during booking:", err)
                }


            
            }

  return (
    <div>
        <h1>Book Event - {event.title}</h1>
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                </div>
                   <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
                </div>
                   <div>
                    <label>Email Name</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                   <div>
                    <label>Street Name</label>
                    <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required/>
                </div>
                   <div>
                    <label>Postal Code</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
                   <div>
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Book Now</button>
            </form>
        </div>
        
    </div>
  )
}

export default BookingEvent