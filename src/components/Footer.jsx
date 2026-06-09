import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Facebook, Globe2 } from 'lucide-react'
import { navLinks } from '../data/navLinks'

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo"><span className="nav-brand-dot">P</span>Y</span>
            <p>E-commerce Specialist & Digital Marketing Executive</p>
            <p className="footer-availability">
              <Globe2 size={13} /> Open to remote & international opportunities
            </p>
          </div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-link">
                <s.icon size={16} />
              </a>
            ))}
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Prashant Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
