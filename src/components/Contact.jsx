import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'prashant@example.com' },
  { icon: Phone, label: 'WhatsApp', value: '+91 XXXXX XXXXX' },
  { icon: MapPin, label: 'Location', value: 'Delhi, India' },
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('button')
    btn.textContent = 'Message Sent!'
    btn.style.background = 'var(--accent-dark)'
    setTimeout(() => {
      btn.textContent = 'Send Message'
      btn.style.background = ''
      e.target.reset()
    }, 3000)
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
            {contactInfo.map((item, i) => (
              <motion.div
                className="contact-item"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="contact-icon-box"><item.icon size={18} /></div>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="social-links">
              {[
                { label: 'LinkedIn', icon: 'in', href: '#' },
                { label: 'Instagram', icon: 'ig', href: '#' },
                { label: 'Facebook', icon: 'fb', href: '#' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
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
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select required defaultValue="">
                <option value="" disabled>Select a Service</option>
                <option value="google-ads">Google Ads</option>
                <option value="meta-ads">Meta Ads</option>
                <option value="marketplace">Marketplace Management</option>
                <option value="analytics-gmb">Analytics & GMB</option>
                <option value="whatsapp">WhatsApp Marketing</option>
                <option value="web-dev">Web Development & Design</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary btn-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}