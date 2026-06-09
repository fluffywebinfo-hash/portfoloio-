import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="page-hero">
        <h1>About Me</h1>
        <p>Get to know my skills, background, projects and what drives me</p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Education />
    </motion.div>
  )
}