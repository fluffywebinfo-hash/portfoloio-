import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo"><span className="nav-brand-dot">P</span>Y</span>
            <p>E-commerce Specialist & Digital Marketing Executive</p>
          </div>
          <div className="footer-links">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/experience', label: 'Experience' },
              { path: '/services', label: 'Services' },
              { path: '/contact', label: 'Contact' },
            ].map((link, i) => (
              <Link key={i} to={link.path}>{link.label}</Link>
            ))}
          </div>
          <p className="footer-copy">&copy; 2026 Prashant Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}