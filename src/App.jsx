import './App.css'
import { Route, Routes } from 'react-router-dom'
import EventPage from './assets/pages/EventPage.jsx'
import EventDetailsPage from './assets/pages/EventDetailsPage.jsx'
import BookingEvent from './assets/pages/BookEventPage.jsx'
import Bookings from './assets/pages/BookingsPage.jsx'
import LoginPage from './assets/pages/LoginPage.jsx'
import Signuppage from './assets/pages/Signuppage.jsx'
import GalleryPage from './assets/pages/GalleryPage.jsx'


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="signup" element={<Signuppage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/events/booking/:id" element={<BookingEvent />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/gallery" element={<GalleryPage />} />
    
    
    </Routes>

    </>
  )
}

export default App
