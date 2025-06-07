import React from 'react'
import { Links } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">Copyright © 2025 Peterdraw</p>
        <p className="footer-text">All rights reserved.</p>
        <a to="/" className="footer-link"> Privacy Policy</a>
        <a to="/" className="footer-link"> Terms of Service</a>
        <a to="/" className="footer-link"> About</a>
      </div>
        <SocialLinks /> 
    </footer>
  )
}

export default Footer