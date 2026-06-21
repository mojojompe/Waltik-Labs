import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, DeviceMobile, Robot, ArrowUpRight,
  ChartBar, Users, Timer, Star,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'

const heroFeatureCards = [
  { icon: Globe, title: 'Web Platforms', subtitle: 'Powerful digital products' },
  { icon: DeviceMobile, title: 'Mobile Apps', subtitle: 'iOS & Android' },
  { icon: Robot, title: 'AI Products', subtitle: 'Intelligent systems' },
]

const categories = ['All', 'Web', 'Mobile', 'AI', 'Design']

const projects = [
  {
    title: 'FinTrack Pro',
    category: 'Web',
    tags: ['Dashboard', 'SaaS', 'React'],
    description: 'A real-time financial analytics dashboard for enterprise teams tracking portfolios across 40+ markets.',
    metrics: [{ label: 'Active Users', value: '12K+' }, { label: 'Data Points/Day', value: '1.2M' }],
    color: '#0A0A0A',
    accent: '#34D399',
    span: 'sm:col-span-2',
  },
  {
    title: 'MediFlow AI',
    category: 'AI',
    tags: ['LLM', 'Healthcare', 'Python'],
    description: 'AI-powered patient management system reducing admin overhead by 60%.',
    metrics: [{ label: 'Time Saved', value: '60%' }, { label: 'Hospitals', value: '8' }],
    color: '#111827',
    accent: '#60A5FA',
    span: '',
  },
  {
    title: 'NomadOS',
    category: 'Mobile',
    tags: ['React Native', 'Productivity', 'iOS/Android'],
    description: 'Remote-work productivity suite for distributed teams across 30+ countries.',
    metrics: [{ label: 'Downloads', value: '25K+' }, { label: 'Rating', value: '4.9★' }],
    color: '#1E1B4B',
    accent: '#A78BFA',
    span: '',
  },
  {
    title: 'EcoRoute',
    category: 'Web',
    tags: ['Sustainability', 'Next.js', 'Maps'],
    description: 'Carbon-footprint tracking and routing platform for global supply chains.',
    metrics: [{ label: 'CO₂ Tracked', value: '500T' }, { label: 'Routes', value: '1M+' }],
    color: '#052e16',
    accent: '#86EFAC',
    span: 'sm:col-span-2',
  },
  {
    title: 'StyleSync',
    category: 'AI',
    tags: ['Computer Vision', 'E-Commerce', 'AI'],
    description: 'AI-powered fashion recommendation engine with 97% accuracy.',
    metrics: [{ label: 'Accuracy', value: '97%' }, { label: 'Conversions', value: '+34%' }],
    color: '#1A0A2E',
    accent: '#F0ABFC',
    span: '',
  },
  {
    title: 'BuildBoard',
    category: 'Design',
    tags: ['Design System', 'Component Library', 'Figma'],
    description: 'A fully documented design system and React component library for enterprise teams.',
    metrics: [{ label: 'Components', value: '200+' }, { label: 'Teams Using', value: '14' }],
    color: '#1C1917',
    accent: '#FBBF24',
    span: '',
  },
]

const caseStudies = [
  {
    title: 'FinTrack Pro',
    subtitle: 'From spreadsheets to a 12,000-user SaaS platform in 6 months.',
    problem: 'The client\'s financial teams were drowning in manual spreadsheet processes with zero real-time visibility across their portfolio.',
    solution: 'We built a real-time analytics dashboard with live market data feeds, custom chart engines, and role-based access control.',
    impact: '98% reduction in manual reporting. 12,000+ active users. $2.4M in additional revenue attributed to platform insights.',
    color: '#0A0A0A',
    accent: '#34D399',
  },
  {
    title: 'MediFlow AI',
    subtitle: 'Cutting hospital admin overhead in half with intelligent AI.',
    problem: 'Overwhelmed nursing staff were spending 40% of their shift on paperwork, reducing quality patient care time.',
    solution: 'We built an LLM-powered document processing pipeline that auto-fills, routes, and tracks patient records in real time.',
    impact: '60% reduction in admin time. 8 hospitals deployed. Recognised by the National Health Tech Awards 2025.',
    color: '#111827',
    accent: '#60A5FA',
  },
]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <Hero
        word="Showcase"
        headline="Featured Projects"
        subtext="A collection of products, platforms, and digital experiences we have built."
        featureCards={heroFeatureCards}
        floatingCardTitle="View Case Studies"
        floatingCardCopy="Explore the detail behind the work — problems solved, results delivered."
        floatingCardCta="See Case Studies"
        floatingCardHref="#case-studies"
      />

      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <SectionLabel>Our Portfolio</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Selected Work</h2>
          </div>
        </Reveal>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-500 border border-black/8 hover:bg-black/5 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12 sm:pb-0 relative">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <div
                key={p.title}
                className={`mobile-sticky-stack sm:static sm:contents`}
                style={{
                  "--mobile-top": `calc(7rem + ${i * 14}px)`,
                  "--mobile-mt": i === 0 ? '0' : '2.5rem',
                  "--mobile-z": i + 10,
                } as React.CSSProperties}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`${p.span} rounded-2xl overflow-hidden group cursor-pointer relative w-full h-full`}
                  style={{ background: p.color, minHeight: 240 }}
                  whileHover={{ scale: 1.015 }}
                >
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-50 opacity-100 sm:hidden" />
                  <div className="p-7 flex flex-col justify-between h-full min-h-[240px] relative z-10">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs font-body px-2.5 py-1 rounded-full bg-white/10 text-white/60">{t}</span>
                      ))}
                    </div>
                    <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>

                  {/* Bottom */}
                  <div>
                    <span style={{ color: p.accent }} className="text-xs font-body font-medium uppercase tracking-widest">
                      {p.category}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-white mt-1 mb-2">{p.title}</h3>
                    <p className="text-sm text-white/50 font-body leading-relaxed mb-4">{p.description}</p>
                    {/* Metrics */}
                    <div className="flex gap-4">
                      {p.metrics.map(m => (
                        <div key={m.label}>
                          <p style={{ color: p.accent }} className="text-base font-display">{m.value}</p>
                          <p className="text-xs text-white/40 font-body">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="bg-white border-t border-black/6 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-16">
            <SectionLabel>In-Depth</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Case Studies</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-black/6">
                  {/* Header */}
                  <div className="p-8 sm:p-10" style={{ background: cs.color }}>
                    <span style={{ color: cs.accent }} className="text-xs font-body font-medium uppercase tracking-widest">
                      Case Study 0{i + 1}
                    </span>
                    <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-2 mb-2">{cs.title}</h3>
                    <p className="text-sm text-white/50 font-body">{cs.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'The Problem', text: cs.problem },
                      { label: 'Our Solution', text: cs.solution },
                      { label: 'The Impact', text: cs.impact },
                    ].map(col => (
                      <div key={col.label}>
                        <h4 className="font-heading font-semibold text-sm text-black mb-3 uppercase tracking-wider">{col.label}</h4>
                        <p className="text-sm text-neutral-500 font-body leading-relaxed">{col.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight mb-6">Next Project?</h2>
            <p className="text-neutral-400 font-body text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Your project could be the next case study. Let's build something remarkable.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-heading font-semibold text-sm px-8 py-4 rounded-2xl hover:bg-neutral-100 transition-colors"
            >
              Start a Project
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
