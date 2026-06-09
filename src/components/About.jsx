import { motion } from 'framer-motion'
import { Target, TrendingUp, ShoppingCart, Award, Zap, Globe } from 'lucide-react'

const highlights = [
  { icon: Target, title: 'Precision Targeting', desc: 'Data-driven audience segmentation & A/B testing' },
  { icon: TrendingUp, title: 'Growth Focused', desc: '20-30% monthly sales growth achieved' },
  { icon: ShoppingCart, title: 'Marketplace Expert', desc: 'Amazon, Flipkart, Myntra, Nykka, Meesho, HealthKart' },
]

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="about-image-card">
              <div className="about-avatar">
                <div className="avatar-ring">
                  <div className="avatar-circle">
                    <img src="/profile.jpg" alt="Prashant Yadav — E-commerce & Digital Marketing Specialist" loading="lazy" decoding="async" width="132" height="132" />
                  </div>
                </div>
              </div>
              <div className="about-status-bar">
                <div className="status-item">
                  <span className="status-num">6+</span>
                  <span className="status-text">Years</span>
                </div>
                <div className="status-divider"></div>
                <div className="status-item">
                  <span className="status-num">5</span>
                  <span className="status-text">Platforms</span>
                </div>
                <div className="status-divider"></div>
                <div className="status-item">
                  <span className="status-num">100+</span>
                  <span className="status-text">Campaigns</span>
                </div>
              </div>
              <div className="about-glow"></div>
            </div>
            <motion.div
              className="about-floating-tag tag-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap size={14} /> Fast Execution
            </motion.div>
            <motion.div
              className="about-floating-tag tag-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Award size={14} /> BCA Graduate
            </motion.div>
            <motion.div
              className="about-floating-tag tag-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Globe size={14} /> Delhi, India
            </motion.div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Results-Driven <span className="highlight">Digital Marketer</span>
            </h2>
            <p>
              I'm an E-commerce Specialist & Digital Marketing Executive with 6+ years
              of experience scaling brands across Amazon, Flipkart, Myntra, Nykaa,
              Meesho & HealthKart. I manage end-to-end marketplace operations — from
              product listings and catalog optimization to sponsored ads and PPC
              campaigns that drive real sales growth.
            </p>
            <p>
              On the paid media front, I plan and optimize Google Ads & Meta Ads
              campaigns for brand awareness, lead generation, and conversions. I also
              develop responsive websites using HTML, CSS, JavaScript & Bootstrap, and
              craft visual content with Canva & Figma for integrated marketing strategies.
            </p>
            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  className="highlight-item"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="highlight-icon-box">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}