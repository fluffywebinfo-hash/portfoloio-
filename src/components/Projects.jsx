import { motion } from 'framer-motion'
import { ShoppingBag, TrendingUp, Globe, Code, Megaphone, Award } from 'lucide-react'

const projects = [
  {
    name: 'Deshwal Enterprises',
    category: 'Marketplace Management',
    icon: ShoppingBag,
    tags: ['Amazon', 'Meesho', 'Sports Equipment'],
    result: '₹3L+ Monthly Revenue',
    details: 'Complete Amazon & Meesho seller account management for sports equipment',
  },
  {
    name: 'Fitoja',
    category: 'Lead Generation',
    icon: Megaphone,
    tags: ['Google Ads', 'Meta Ads', '₹5K Daily Budget'],
    result: '2,800+ Leads Generated',
    details: 'High-intent lead generation campaigns with optimized CPL',
  },
  {
    name: 'TruePower Hybrid Inverter',
    category: 'Lead Generation',
    icon: TrendingUp,
    tags: ['Meta Ads', '₹5K Daily Budget', 'B2C'],
    result: '7,500+ Leads Monthly',
    details: 'Lead generation campaign for hybrid inverter & battery products',
  },
  {
    name: 'GWS Home Care Services',
    category: 'Lead Generation',
    icon: Megaphone,
    tags: ['Meta Ads', '₹10K+ Monthly', 'Healthcare'],
    result: '210+ Leads/Month',
    details: 'Qualified lead generation for nursing & healthcare services',
  },
  {
    name: 'House of B&S',
    category: 'E-Commerce + Meta Ads',
    icon: ShoppingBag,
    tags: ['Meta Ads', 'Myntra', '₹1.8K Daily'],
    result: '₹1.5L+ Sales + ₹70K Weekly',
    details: 'Meta catalogue ads + Myntra brand registration & weekly sales',
  },
  {
    name: 'Vardhman Tapes',
    category: 'B2B Lead Generation',
    icon: TrendingUp,
    tags: ['Google Ads', 'Meta Ads', 'B2B'],
    result: 'Qualified Business Inquiries',
    details: 'B2B manufacturing lead generation campaigns',
  },
  {
    name: 'Blue Phoenix Nutraceuticals',
    category: 'Brand Awareness + E-Commerce',
    icon: Megaphone,
    tags: ['Meta Ads', 'Amazon', 'Meesho'],
    result: 'Improved Brand Presence',
    details: 'Meta awareness + sales campaigns + Amazon/Meesho listing management',
  },
  {
    name: 'Aasakhi Saree',
    category: 'Instagram Growth',
    icon: Megaphone,
    tags: ['Instagram', 'Awareness', 'Catalogue Ads'],
    result: 'Increased Engagement',
    details: 'Instagram growth & catalogue sales campaigns for saree brand',
  },
  {
    name: 'ITESCS',
    category: 'Education Leads',
    icon: TrendingUp,
    tags: ['Google Ads', 'Meta Ads', 'Certifications'],
    result: 'Targeted Leads Generated',
    details: 'ISO certification, fire safety & professional certification leads',
  },
  {
    name: 'House of Iraaya Glam',
    category: 'Fashion E-Commerce',
    icon: ShoppingBag,
    tags: ['Meta Sales', 'Jewelry', 'Fashion'],
    result: 'Increased Online Sales',
    details: 'Meta sales campaigns for jewelry & fashion brand',
  },
  {
    name: 'Ice9 Gaming Platform',
    category: 'Performance Marketing',
    icon: Globe,
    tags: ['Performance Ads', 'User Acquisition'],
    result: 'Platform Reach Improved',
    details: 'Performance marketing & user acquisition for gaming platform',
  },
  {
    name: 'NatureLeaf Nutraceuticals',
    category: 'Amazon Brand Setup',
    icon: Award,
    tags: ['Brand Store', 'A+ Content', 'Amazon'],
    result: 'Complete Brand Established',
    details: 'Amazon brand store creation, A+ content & listing optimization',
  },
  {
    name: 'Ekafab',
    category: 'Marketplace Management',
    icon: ShoppingBag,
    tags: ['Amazon', 'Flipkart', 'Ethnic Wear'],
    result: 'End-to-End Operations',
    details: 'Amazon & Flipkart marketplace management for ethnic wear',
  },
  {
    name: 'KTService Hub',
    category: 'Website Development',
    icon: Code,
    tags: ['WordPress', 'Business Website'],
    result: 'Complete Website Delivered',
    details: 'WordPress business website design & development',
  },
  {
    name: 'Fluffyweb Tech',
    category: 'Website Development',
    icon: Code,
    tags: ['Corporate Website', 'UI/UX', 'Deployment'],
    result: 'Corporate Site Launched',
    details: 'Corporate website with UI/UX design, development & deployment',
  },
  {
    name: 'FNW Studio',
    category: 'Website Development',
    icon: Code,
    tags: ['Landing Page', 'Responsive'],
    result: 'Landing Page Delivered',
    details: 'Fully responsive landing page development',
  },
]

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          My Portfolio
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Client <span className="highlight">Projects</span>
        </motion.h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              className="project-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-glow"></div>
              <div className="project-icon-box"><p.icon size={20} strokeWidth={2} /></div>
              <h3>{p.name}</h3>
              <span className="project-category">{p.category}</span>
              <p className="project-details">{p.details}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
              </div>
              <div className="project-result">
                <TrendingUp size={14} /> {p.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}