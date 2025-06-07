import './App.css'
import { Route, Routes } from 'react-router-dom'
import EventPage from './assets/pages/EventPage.jsx'
import EventDetailsPage from './assets/pages/EventDetailsPage.jsx'
import BookingEvent from './assets/pages/BookingEvent.jsx'
import Bookings from './assets/pages/Bookings.jsx'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/events/booking/:id" element={<BookingEvent />} />
      <Route path="/bookings" element={<Bookings />} />
    
    </Routes>

    </>
  )
}

export default App
