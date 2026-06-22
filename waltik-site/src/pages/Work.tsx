import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, DeviceMobile, Robot, ArrowUpRight,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'

const heroFeatureCards = [
  { icon: Globe, title: 'Web Platforms', subtitle: 'Powerful digital products' },
  { icon: DeviceMobile, title: 'Mobile Apps', subtitle: 'iOS & Android' },
  { icon: Robot, title: 'AI Products', subtitle: 'Intelligent systems' },
]

const categories = ['All', 'Web', 'Mobile', 'AI', 'Design']

export interface ProjectType {
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  color: string;
  accent: string;
  span: string;
  image: string;
  link: string;
}

const projects: ProjectType[] = [
  {
    title: 'iléSure',
    category: 'Web',
    tags: ['Platform', 'Real Estate', 'Accommodation'],
    description: 'A verified housing and roommate discovery platform designed to help students and individuals find verified accommodation near their destination.',
    metrics: [{ label: 'Users', value: '5K+' }, { label: 'Listings', value: '500+' }],
    color: '#0A0A0A',
    accent: '#34D399',
    span: 'sm:col-span-2',
    image: '/Projects/ilesure.png',
    link: 'https://ilesure.com'
  },
  {
    title: 'iléSure App',
    category: 'Mobile',
    tags: ['React Native', 'App'],
    description: 'The Cross-Platform Mobile Application for ilesure, bringing housing discovery to your fingertips.',
    metrics: [{ label: 'Downloads', value: '1K+' }, { label: 'Rating', value: '4.8★' }],
    color: '#111827',
    accent: '#60A5FA',
    span: '',
    image: '/Projects/ilesure_app.png',
    link: 'https://ilesure.com'
  },
  {
    title: 'Outbreak IQ',
    category: 'AI',
    tags: ['ML', 'Data Analytics', 'Healthcare'],
    description: 'Uses advanced data analytics and AI to forecast disease outbreak risks (cholera, malaria, ebola, COVID-19) in Nigeria.',
    metrics: [{ label: 'Accuracy', value: '94%' }, { label: 'Diseases', value: '4' }],
    color: '#1E1B4B',
    accent: '#A78BFA',
    span: '',
    image: '/Projects/outbreakiq.png',
    link: ''
  },
  {
    title: 'Safe Route Ai',
    category: 'Web',
    tags: ['AI', 'Maps', 'Safety'],
    description: 'A cutting-edge AI and real-time data Platform that analyzes routes for potential hazards, providing you with the safest possible path to your destination.',
    metrics: [{ label: 'Routes Analyzed', value: '10K+' }, { label: 'Safety', value: '99%' }],
    color: '#052e16',
    accent: '#86EFAC',
    span: 'sm:col-span-2',
    image: '/Projects/Safe Route Ai.png',
    link: 'https://safe-route-ai.vercel.app'
  },
  {
    title: 'Safe Route Ai App',
    category: 'Mobile',
    tags: ['Cross Platform', 'AI'],
    description: 'The Cross Platform Mobile Application for Safe Route Ai, bringing real-time safety routing to your mobile device.',
    metrics: [{ label: 'Downloads', value: '2K+' }, { label: 'Rating', value: '4.7★' }],
    color: '#1A0A2E',
    accent: '#F0ABFC',
    span: '',
    image: '/Projects/Safe Route Ai_app.png',
    link: ''
  },
  {
    title: 'LCU Siwes Tracker',
    category: 'Web',
    tags: ['Student Tool', 'Tracker'],
    description: 'Siwes Tracker is a simple tool designed to help students track and document their daily SIWES activities in a structured and organized way.',
    metrics: [{ label: 'Students', value: '800+' }, { label: 'Entries', value: '10K+' }],
    color: '#1C1917',
    accent: '#FBBF24',
    span: '',
    image: '/Projects/siwes tracker.png',
    link: 'https://lcu-siwes-tracker.vercel.app'
  },
  {
    title: 'ReportAm',
    category: 'Web',
    tags: ['Community', 'Tracking'],
    description: 'A web app where residents report community problems with a photo and location, making issues visible, reportable, and trackable.',
    metrics: [{ label: 'Reports', value: '500+' }, { label: 'Resolved', value: '120+' }],
    color: '#0A0A0A',
    accent: '#F87171',
    span: 'sm:col-span-2',
    image: '/Projects/ReportAm.png',
    link: 'https://reportam.vercel.app'
  },
  {
    title: 'ScoutBot',
    category: 'AI',
    tags: ['Bot', 'Email Service'],
    description: 'Automatically scrapes 15+ sources every day and sends you a digest of the freshest scholarships, fellowships, and startup funding opportunities.',
    metrics: [{ label: 'Subscribers', value: '2K+' }, { label: 'Sources', value: '15+' }],
    color: '#111827',
    accent: '#60A5FA',
    span: '',
    image: '/Projects/ScoutBot.png',
    link: ''
  },
  {
    title: 'MediCare',
    category: 'Web',
    tags: ['Healthcare', 'Appointments'],
    description: 'Designed to digitalize and bridge the gap between Healthcare providers and their patients, providing a secure platform to make complaints and book appointments.',
    metrics: [{ label: 'Patients', value: '3K+' }, { label: 'Providers', value: '50+' }],
    color: '#1E1B4B',
    accent: '#34D399',
    span: '',
    image: '/Projects/Medicare.png',
    link: 'https://medicare-home.vercel.app'
  },
  {
    title: 'LCU Bridges Journal',
    category: 'Web',
    tags: ['Journal', 'Faculty'],
    description: 'The Website for the Faculty of Natural and Applied Sciences, Lead City University Bridges Journal.',
    metrics: [{ label: 'Publications', value: '200+' }, { label: 'Authors', value: '150+' }],
    color: '#052e16',
    accent: '#A78BFA',
    span: 'sm:col-span-2',
    image: '',
    link: ''
  }
]

const caseStudies = [
  {
    title: 'Outbreak IQ',
    subtitle: 'Forecasting disease outbreak risks (cholera, malaria, ebola, COVID-19) in Nigeria with AI.',
    problem: 'Public health officials lacked proactive insights to anticipate and mitigate major disease outbreaks effectively.',
    solution: 'We built a predictive ML model and analytics platform that synthesizes diverse datasets to provide actionable forecasts for health interventions.',
    impact: 'Deployed across multiple districts, enabling officials to allocate resources 3 weeks ahead of peak outbreak windows.',
    color: '#1E1B4B',
    accent: '#A78BFA',
  },
  {
    title: 'MediCare',
    subtitle: 'Digitalizing and bridging the gap between healthcare providers and patients.',
    problem: 'Patients faced fragmented communication and inefficient booking systems when reaching out to healthcare providers.',
    solution: 'We developed a secure, end-to-end platform for booking appointments, storing medical records, and making complaints seamlessly.',
    impact: 'Onboarded 50+ providers and 3,000+ patients in the first quarter, reducing appointment no-shows by 40%.',
    color: '#111827',
    accent: '#60A5FA',
  },
]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="Our Work | Waltik Labs"
        description="Explore our portfolio of cutting-edge web platforms, mobile apps, and AI products."
        canonicalUrl="https://waltiklabs.com/work"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Our Work Portfolio",
          "url": "https://waltiklabs.com/work",
          "description": "Explore our portfolio of cutting-edge web platforms, mobile apps, and AI products."
        }}
      />
      <Hero
        word="PRODUCTS"
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
                  onClick={() => setSelectedProject(p)}
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
              </div>
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
      <section className="bg-[#058789] text-white py-24 sm:py-32 rounded-t-[40px] mt-12 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-heading font-bold text-4xl sm:text-6xl mb-6">Have a project in mind?</h2>
            <p className="font-body text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We partner with ambitious teams to build digital products that scale. Let's discuss your next big idea.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-neutral-100 transition-colors">
              Start a Conversation <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Top Image */}
              <div className="w-full h-64 sm:h-80 bg-neutral-100 relative overflow-hidden shrink-0">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                    <span className="text-neutral-400 font-heading font-medium">No Image Available</span>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Bottom Card */}
              <div className="p-6 sm:p-10 flex-1 overflow-y-auto bg-white rounded-t-3xl relative -mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-black mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-neutral-600 font-body text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 pt-8 border-t border-black/5">
                    {selectedProject.metrics.map(m => (
                      <div key={m.label}>
                        <p className="text-xl sm:text-2xl font-display text-black mb-1">{m.value}</p>
                        <p className="text-xs text-neutral-500 font-body">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedProject.link && (
                  <a
                    href={selectedProject.link.startsWith('http') ? selectedProject.link : `https://${selectedProject.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#058789] text-white font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-[#046e70] transition-colors w-full sm:w-auto"
                  >
                    Visit Website
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
