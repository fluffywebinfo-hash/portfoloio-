import { motion } from 'framer-motion'
import { Globe2, Clock, Laptop, Languages } from 'lucide-react'

const pillars = [
  {
    icon: Globe2,
    title: 'Remote-Ready, Worldwide',
    desc: 'Open to remote roles & freelance contracts for US, UK, EU, Middle East & APAC brands.',
  },
  {
    icon: Clock,
    title: 'Flexible Time Zones',
    desc: 'Based in IST (GMT+5:30) with overlap hours for EMEA, UK & US-East collaboration.',
  },
  {
    icon: Laptop,
    title: 'Async & Tool-Fluent',
    desc: 'Comfortable with Slack, Notion, Trello, Meta & Google Ads dashboards and async workflows.',
  },
  {
    icon: Languages,
    title: 'Clear Communication',
    desc: 'Professional working proficiency in English & Hindi for cross-border client delivery.',
  },
]

const platforms = [
  'Google Ads', 'Meta Ads', 'Amazon', 'Shopify-ready', 'GA4',
  'Google Tag Manager', 'WordPress', 'Figma', 'WhatsApp Business API',
]

export default function GlobalStrip() {
  return (
    <section className="global-strip" aria-labelledby="global-heading">
      <div className="container">
        <motion.div
          className="global-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Global Availability</span>
          <h2 id="global-heading">
            Built for <span className="highlight">International</span> Teams
          </h2>
          <p>
            Six-plus years scaling brands across global marketplaces and ad platforms —
            ready to plug into distributed teams and deliver measurable growth.
          </p>
        </motion.div>

        <div className="global-grid">
          {pillars.map((p, i) => (
            <motion.div
              className="global-card"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="global-card-icon"><p.icon size={22} strokeWidth={2} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="global-marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {platforms.map((tool) => (
            <span className="global-pill" key={tool}>{tool}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
