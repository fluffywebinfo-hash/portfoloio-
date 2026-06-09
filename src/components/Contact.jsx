import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

// Update these with real details before going live
const EMAIL = 'prashant.yadav@example.com'
const WHATSAPP = '+91 00000 00000'

const contactInfo = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MessageCircle, label: 'WhatsApp', value: WHATSAPP, href: null },
  { icon: MapPin, label: 'Location', value: 'Delhi, India · Remote Worldwide', href: null },
]

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/' },
]

const services = [
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'meta-ads', label: 'Meta Ads' },
  { value: 'marketplace', label: 'Marketplace Management' },
  { value: 'analytics-gmb', label: 'Analytics & GMB' },
  { value: 'whatsapp', label: 'WhatsApp Marketing' },
  { value: 'web-dev', label: 'Web Development & Design' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceLabel = services.find((s) => s.value === form.service)?.label || 'General Inquiry'
    const subject = encodeURIComponent(`Project Inquiry: ${serviceLabel}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${serviceLabel}\n\n${form.message}`
    )
    // Opens the visitor's email client pre-filled (works with no backend)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', service: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section className="contact-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Let's Connect
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, i) => {
              const Inner = (
                <>
                  <div className="contact-icon-box"><item.icon size={18} /></div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </>
              )
              return (
                <motion.div
                  className="contact-item"
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {item.href ? (
                    <a href={item.href} className="contact-item-link">{Inner}</a>
                  ) : Inner}
                </motion.div>
              )
            })}

            <div className="social-links">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" aria-label="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" aria-label="Your Email" required />
            </div>
            <div className="form-group">
              <select name="service" value={form.service} onChange={handleChange} aria-label="Select a Service" required>
                <option value="" disabled>Select a Service</option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows="5" aria-label="Your Message" required></textarea>
            </div>

            {sent && (
              <motion.div className="form-status success" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
                Thanks! Your email client should open — or reach me directly at {EMAIL}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="btn btn-primary btn-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            <p className="form-note">Prefer email? Write to {EMAIL} — replies within 24 hours.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
