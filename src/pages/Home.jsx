import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Process from '../components/Process'
import Education from '../components/Education'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Education />
    </motion.div>
  )
}