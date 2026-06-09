import Experience from '../components/Experience'
import { motion } from 'framer-motion'

export default function ExperiencePage() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="page-hero">
        <h1>My Experience</h1>
        <p>A journey through 6+ years of digital marketing & e-commerce growth</p>
      </div>
      <Experience />
    </motion.div>
  )
}