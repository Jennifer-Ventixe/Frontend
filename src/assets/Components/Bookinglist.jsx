import React, { useEffect, useState } from 'react'
import BookingItem from './BookingItem'

const BookingList = () => {
    const [bookings, setBookings] = useState([])

    const getBookings = async () => {
        const res = await fetch("https://jennifer-bookingservice-dwaudnhbehdmhhfu.swedencentral-01.azurewebsites.net/api/bookings")

        if (res.ok) {
            const response = await res.json()
            setBookings(response.result)
        }
    }
    useEffect(() => {
        getBookings()

    }, [])

  return (
    <section id="bookings">
        {
            bookings.map(booking => (<BookingItem key={booking.id} item={booking} />))
        }

    </section>
  )
}

export default BookingList