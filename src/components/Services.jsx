import { motion } from 'framer-motion'
import { Search, Smartphone, ShoppingCart, BarChart3, MessageCircle, Globe } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Google Ads Management',
    desc: 'Search, Display, Shopping & YouTube campaigns optimized for maximum ROAS with precise keyword targeting and bid strategies.',
    tags: ['Search & Display Ads', 'Shopping Campaigns', 'YouTube Ads', 'Remarketing'],
  },
  {
    icon: Smartphone,
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Full-funnel campaign architecture from awareness to conversion with A/B testing, audience segmentation, and creative optimization.',
    tags: ['Lead Generation', 'Conversion Campaigns', 'A/B Testing', 'Brand Awareness'],
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Management',
    desc: 'End-to-end seller account management on Amazon, Flipkart, Meesho, Myntra, Nykka & HealthKart — listings, ads, inventory & growth.',
    tags: ['Product Listing Optimization', 'Sponsored Ads & PPC', 'Inventory Management', 'Catalog & Pricing'],
  },
  {
    icon: BarChart3,
    title: 'Google Analytics & GMB',
    desc: 'Data-driven insights through GA4 setup, custom dashboards, and Google My Business optimization for local visibility.',
    tags: ['GA4 Configuration', 'Custom Reports', 'GMB Setup & Ranking', 'Local SEO'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    desc: 'Bulk messaging, automated flows, and broadcast campaigns via WhatsApp Business API for direct customer engagement.',
    tags: ['Bulk Broadcasts', 'Automated Flows', 'Chatbot Integration', 'Catalog Sharing'],
  },
  {
    icon: Globe,
    title: 'Web Development & Design',
    desc: 'Responsive websites and landing pages built with HTML, CSS, JS, Bootstrap & WordPress — plus creative design with Canva & Figma.',
    tags: ['Landing Pages', 'WordPress Sites', 'Social Media Creatives', 'Brand Strategy'],
  },
]

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          What I Offer
        </motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          My <span className="highlight">Services</span>
        </motion.h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-glow"></div>
              <div className="service-icon-box"><svc.icon size={26} strokeWidth={2} /></div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map((t, j) => <span key={j} className="service-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}