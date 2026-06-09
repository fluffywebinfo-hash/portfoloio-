import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const startTime = performance.now()
    function update(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [isInView, target])

  return <span ref={ref}>{count}<span className="stat-suffix">{suffix}</span></span>
}

const stats = [
  { target: 3, suffix: 'L+', label: 'Monthly Revenue Managed' },
  { target: 10, suffix: 'K+', label: 'Leads Generated' },
  { target: 12, suffix: '+', label: 'Brands Managed' },
  { target: 5, suffix: '+', label: 'Websites Delivered' },
]

const roles = [
  'Digital Marketing Executive',
  'E-Commerce Specialist',
  'Lead Generation Expert',
  'Marketplace Growth Strategist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-mesh">
        <motion.div className="mesh-blob mesh-blob-1" animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.9, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="mesh-blob mesh-blob-2" animate={{ x: [0, -30, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="mesh-blob mesh-blob-3" animate={{ x: [0, 20, -40, 0], y: [0, -40, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="hero-grid-overlay"></div>

      <div className="hero-content">
        <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}>
          <span className="badge-dot"></span>
          Available for Projects
        </motion.div>

        <motion.p className="hero-greeting" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          Hello, I'm
        </motion.p>

        <motion.h1 className="hero-name" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          Prashant <span className="hero-name-accent">Yadav</span>
        </motion.h1>

        <motion.div className="hero-role-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <AnimatePresence mode="wait">
            <motion.h2 key={roleIndex} className="hero-title" initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }} transition={{ duration: 0.4 }}>
              <span className="highlight">{roles[roleIndex]}</span>
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
          ₹3L+ monthly marketplace revenue · 10K+ leads generated · 12+ brands scaled
          across Amazon, Flipkart, Meesho, Myntra & more — with data-driven Meta & Google Ads.
        </motion.p>

        <motion.div className="hero-buttons" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <Link to="/services" className="btn btn-primary">My Services <ArrowRight size={18} /></Link>
          <Link to="/contact" className="btn btn-outline">Get In Touch <Send size={18} /></Link>
        </motion.div>

        <motion.div className="hero-stats" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
          {stats.map((s, i) => (
            <motion.div className="stat-card" key={i} whileHover={{ scale: 1.05, y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
              <span className="stat-number"><Counter target={s.target} suffix={s.suffix} /></span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero-scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}