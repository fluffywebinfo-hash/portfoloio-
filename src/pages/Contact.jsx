import Contact from '../components/Contact'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="page-hero">
        <h1>Get In Touch</h1>
        <p>Let's discuss how I can help grow your business</p>
      </div>
      <Contact />
    </motion.div>
  )
}