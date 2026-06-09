import Services from '../components/Services'
import Process from '../components/Process'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="page-hero">
        <h1>Services</h1>
        <p>What I can do for your business — from ads to marketplace management</p>
      </div>
      <Services />
      <Process />
    </motion.div>
  )
}