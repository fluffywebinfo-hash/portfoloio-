import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Users, ShoppingBag, Globe, Code } from 'lucide-react'

const experiences = [
  {
    role: 'E-commerce Specialist & Digital Marketing Executive',
    company: 'Cliqkmedia Marketing Agency',
    date: 'Sep 2025 - Present',
    location: '',
    current: true,
    points: [
      'Managed 12+ client projects across Digital Marketing, Performance Marketing, Marketplace Management, Website Development & Lead Generation',
      'Managed ad budgets of ₹5,000+ daily across multiple accounts on Google Ads & Meta Ads',
      'Generated 7,500+ leads monthly for TruePower Hybrid Inverter at ₹5,000 daily budget',
      'Generated 210+ qualified leads/month for GWS Home Care at ₹10,000+ monthly budget',
      'Delivered ₹1.5L+ sales through Meta Ads for House of B&S at ₹1,800 daily budget',
      'Managed Myntra operations generating ₹70K+ weekly sales for House of B&S',
    ],
    badge: '12+ Brands Managed',
  },
  {
    role: 'Digital Marketing Executive',
    company: 'Fitoja',
    date: 'Apr 2025 - Sep 2025',
    location: 'Delhi',
    current: false,
    points: [
      'Managed Google Ads & Meta Ads lead generation campaigns with ₹5,000 daily budget',
      'Generated 2,800+ high-intent leads with optimized CPL (Cost Per Lead)',
      'Designed social media creatives for Facebook & Instagram using Canva',
      'Enhanced brand visibility through SEO-focused content strategies',
    ],
    badge: '2,800+ Leads',
  },
  {
    role: 'Digital Marketing Executive (Meta Ads & E-Commerce)',
    company: 'Deshwal Enterprises',
    date: 'Oct 2023 - Apr 2025',
    location: '',
    current: false,
    points: [
      'Complete Amazon & Meesho seller account management for sports equipment category',
      'Generated monthly revenue of ₹3,00,000+ (Amazon: ₹2,50,000+)',
      'Achieved 20-30% monthly sales growth through targeted advertising strategies',
      'Product listing optimization, inventory management, A/B testing on creatives',
      'Analyzed campaign performance using marketplace & Meta Ads analytics',
    ],
    badge: '₹3L+ Monthly Revenue',
  },
  {
    role: 'E-Commerce & Digital Marketing Freelancer',
    company: 'Self-Employed',
    date: 'Jul 2020 - Sep 2023',
    location: '',
    current: false,
    points: [
      'Managed seller accounts on Amazon, Flipkart & Meesho marketplaces',
      'Delivered 5+ websites including WordPress sites, landing pages & corporate websites',
      'Managed Myntra operations for Lil Townie brand',
      'Generated qualified real estate leads for Asta Reality via Meta Ads',
      'Developed & deployed Fluffyweb Tech corporate website & KTService Hub WordPress site',
      'Assisted multiple small businesses in scaling their online presence',
    ],
    badge: '5+ Websites Delivered',
  },
]

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          My Career
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Work <span className="highlight">Experience</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div className="timeline-item" key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} viewport={{ once: true, margin: '-50px' }}>
              <div className={`timeline-dot ${exp.current ? 'current' : ''}`}>
                {exp.current && <motion.div className="dot-pulse" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />}
              </div>
              <motion.div className="timeline-card" whileHover={{ scale: 1.01 }}>
                <div className="timeline-header">
                  <div className="timeline-role-info">
                    <h3>{exp.role}</h3>
                    <div className="timeline-meta">
                      <span className="timeline-company"><Briefcase size={14} /> {exp.company}</span>
                      {exp.location && <span className="timeline-location"><MapPin size={14} /> {exp.location}</span>}
                    </div>
                  </div>
                  <span className="timeline-date"><Calendar size={14} /> {exp.date}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
                {exp.badge && <motion.span className="timeline-badge" whileHover={{ scale: 1.05 }}><TrendingUp size={14} /> {exp.badge}</motion.span>}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}