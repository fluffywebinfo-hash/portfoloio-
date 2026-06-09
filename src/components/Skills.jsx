import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: 'Paid Advertising',
    icon: '🔍',
    items: [
      { name: 'Google Ads', level: 90 },
      { name: 'Meta Ads (FB & IG)', level: 92 },
      { name: 'SEO & Campaign Planning', level: 85 },
    ],
  },
  {
    category: 'Analytics & Local SEO',
    icon: '📊',
    items: [
      { name: 'Google Analytics', level: 85 },
      { name: 'GMB Setup & Optimization', level: 82 },
      { name: 'WhatsApp Marketing', level: 85 },
    ],
  },
  {
    category: 'Marketplace Management',
    icon: '🛒',
    items: [
      { name: 'Amazon', level: 90 },
      { name: 'Flipkart', level: 88 },
      { name: 'Meesho', level: 85 },
      { name: 'Myntra', level: 80 },
      { name: 'Nykaa', level: 78 },
      { name: 'HealthKart', level: 75 },
    ],
  },
  {
    category: 'Creative & Technical',
    icon: '💡',
    items: [
      { name: 'Canva & Figma', level: 88 },
      { name: 'WordPress', level: 82 },
      { name: 'HTML, CSS, JS & Bootstrap', level: 80 },
      { name: 'jQuery', level: 75 },
    ],
  },
]

function SkillBar({ name, level }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & <span className="highlight">Tools</span>
        </motion.h2>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <motion.div
              className="skill-category"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-category-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>
              <div className="skill-items">
                {cat.items.map((item, j) => (
                  <SkillBar key={j} name={item.name} level={item.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}