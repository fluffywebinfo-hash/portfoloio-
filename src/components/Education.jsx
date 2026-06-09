import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  return (
    <section className="education-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Education
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Academic <span className="highlight">Background</span>
        </motion.h2>
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <div className="education-icon-box"><GraduationCap size={36} /></div>
          <div className="education-details">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="education-field">Computer Science</p>
            <div className="education-meta">
              <span className="education-school"><MapPin size={14} /> Chaudhary Charan Singh University</span>
              <span className="education-year"><Calendar size={14} /> 2020 - 2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}