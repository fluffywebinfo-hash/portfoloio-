import { motion } from 'framer-motion'
import { Search, Rocket, Zap, RefreshCw } from 'lucide-react'

const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'Understand your business, audience, goals, and current digital footprint.' },
  { num: '02', icon: Rocket, title: 'Strategy', desc: 'Build a tailored marketing plan with clear KPIs and channel allocation.' },
  { num: '03', icon: Zap, title: 'Execute', desc: 'Launch campaigns, optimize listings, and deploy all planned activities.' },
  { num: '04', icon: RefreshCw, title: 'Optimize', desc: 'Continuous A/B testing, data analysis, and performance refinement.' },
]

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          How I Work
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          My <span className="highlight">Process</span>
        </motion.h2>
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              className="process-step"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="step-icon-box"><step.icon size={22} /></div>
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}