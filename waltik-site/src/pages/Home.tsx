import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code, Robot, PaintBrush, Cloud,
  ArrowUpRight, Star,
  Quotes, Users, Briefcase, Rocket,
  FigmaLogo, StripeLogo, SlackLogo, GithubLogo, DiscordLogo, SpotifyLogo
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'
import DOMCircularGallery from '../components/ui/DOMCircularGallery'
import CardSwap, { Card } from '../components/ui/CardSwap'

/* ── Data ─────────────────────────────────────────────────────────── */
const heroFeatureCards = [
  { icon: Code, title: 'Software Engineering', subtitle: 'Custom digital products' },
  { icon: Robot, title: 'AI Solutions', subtitle: 'Intelligent automation' },
  { icon: PaintBrush, title: 'Product Design', subtitle: 'World-class UX' },
]

const companyLogos = [
  { name: 'Stripe', icon: StripeLogo },
  { name: 'Slack', icon: SlackLogo },
  { name: 'Figma', icon: FigmaLogo },
  { name: 'GitHub', icon: GithubLogo },
  { name: 'Spotify', icon: SpotifyLogo },
  { name: 'Discord', icon: DiscordLogo },
]

const services = [
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'We architect and build scalable, high-performance applications from the ground up — web, mobile, and APIs.',
    tags: ['React', 'Node.js', 'TypeScript', 'Python'],
    image: '/illustrations/software_eng.png',
  },
  {
    icon: Robot,
    title: 'AI & Machine Learning',
    description: 'From intelligent chatbots to predictive analytics, we embed AI into your product to unlock new capabilities.',
    tags: ['LLMs', 'RAG', 'Computer Vision', 'Automation'],
    image: '/illustrations/ai_solutions.png',
  },
  {
    icon: PaintBrush,
    title: 'Product Design',
    description: 'We craft digital experiences that are as beautiful as they are intuitive — with research-driven, pixel-perfect design.',
    tags: ['Figma', 'UX Research', 'Design Systems', 'Prototyping'],
    image: '/illustrations/product_design.png',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'We design and manage cloud architectures that are reliable, secure, and built to scale with your business.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    image: '/illustrations/cloud_infra.png',
  },
]

const projects = [
  {
    title: 'FinTrack Pro',
    category: 'Web Platform',
    description: 'A real-time financial analytics dashboard for enterprise teams.',
    color: 'bg-white text-black border border-black/10',
    accent: 'text-[#058789]',
    span: 'lg:col-span-2',
    darkText: true,
  },
  {
    title: 'MediFlow AI',
    category: 'AI Product',
    description: 'Intelligent patient management powered by LLMs.',
    color: 'bg-black text-white',
    accent: 'text-[#058789]',
    span: '',
    darkText: false,
  },
  {
    title: 'NomadOS',
    category: 'Mobile App',
    description: 'A remote-work productivity suite for distributed teams.',
    color: 'bg-neutral-900 text-white',
    accent: 'text-[#058789]',
    span: '',
    darkText: false,
  },
  {
    title: 'EcoRoute',
    category: 'Web + Mobile',
    description: 'Carbon-footprint tracking platform for supply chains.',
    color: 'bg-white text-black border border-black/10',
    accent: 'text-[#058789]',
    span: 'lg:col-span-2',
    darkText: true,
  },
]

const testimonials = [
  {
    quote: 'Waltik Labs didn\'t just build our product — they transformed how we think about software. Exceptional quality, exceptional team.',
    name: 'Sarah Chen',
    role: 'CEO, FinTrack Pro',
  },
  {
    quote: 'The level of craft and attention to detail was unlike anything we\'ve seen. Our users noticed immediately.',
    name: 'Marcus Okafor',
    role: 'CTO, MediFlow AI',
  },
  {
    quote: 'On-time, on-budget, and the final product exceeded every expectation. We\'ll be working with them again.',
    name: 'Priya Sharma',
    role: 'Head of Product, EcoRoute',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Briefcase, bg: 'bg-white', text: 'text-black', iconColor: 'text-[#058789]', labelColor: 'text-neutral-500' },
  { value: '30+', label: 'Clients Worldwide', icon: Users, bg: 'bg-neutral-100', text: 'text-black', iconColor: 'text-[#058789]', labelColor: 'text-neutral-500' },
  { value: '98%', label: 'Client Satisfaction', icon: Star, bg: 'bg-black', text: 'text-white', iconColor: 'text-[#058789]', labelColor: 'text-neutral-400' },
  { value: '5+', label: 'Years of Excellence', icon: Rocket, bg: 'bg-[#058789]', text: 'text-white', iconColor: 'text-white/80', labelColor: 'text-white/70' },
]

/* ── Counter component ────────────────────────────────────────────── */
function StatCard({ value, label, icon: Icon, bg, text, iconColor, labelColor }: typeof stats[0]) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center text-center p-6 ${bg} card-shadow rounded-[24px] border border-black/5 min-h-[240px]`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
    >
      <Icon size={28} weight="fill" className={`${iconColor} mb-3`} />
      <span className={`font-display text-5xl ${text} tracking-tight`}>{value}</span>
      <span className={`text-xs font-body ${labelColor} mt-1 uppercase tracking-widest`}>{label}</span>
    </motion.div>
  )
}

/* ── Home Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="Waltik Labs | Modern Digital Products & Solutions"
        description="We design, build, and scale modern software, AI systems, and digital products that drive growth."
        canonicalUrl="https://waltiklabs.com"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Waltik Labs",
          "url": "https://waltiklabs.com",
          "description": "Engineering the Future of Digital Experiences.",
          "publisher": {
            "@type": "Organization",
            "name": "Waltik Labs"
          }
        }}
      />
      {/* Hero */}
      <Hero
        word="WALTIK"
        headline="Engineering the Future of Digital Experiences"
        subtext="We design, build, and scale modern software, AI systems, and digital products that drive growth."
        featureCards={heroFeatureCards}
        floatingCardTitle="Start a Project"
        floatingCardCopy="Transform your idea into a world-class digital product."
        floatingCardCta="Book a Discovery Call"
        floatingCardHref="/contact"
      />

      {/* Logo marquee with icons */}
      <section className="mt-20 py-8 overflow-hidden bg-white border-b border-black/5">
        <div className="flex w-[200%] marquee-track items-center">
          {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((tech, i) => (
            <div key={i} className="mx-8 flex flex-col items-center justify-center gap-1.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity">
              <tech.icon size={36} weight="fill" className="text-[#058789]" />
              <span className="text-[10px] font-heading font-bold text-black uppercase tracking-widest whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats with grid background */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        {/* Desktop Grid */}
        <div className="hidden lg:grid relative z-10 grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Mobile Circular Gallery */}
        <div className="lg:hidden relative z-10 overflow-hidden -mx-4 sm:-mx-6 w-full flex justify-center">
          <DOMCircularGallery bendStrength={60} rotationStrength={10}>
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </DOMCircularGallery>
        </div>
      </section>

      {/* Services — Bento grid with Illustrations */}
      <section className="relative bg-white border-t border-black/5 py-24">
        <div className="absolute inset-0 noise" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">
              Services Built for<br className="hidden sm:block" /> Scale
            </h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
            <p className="mt-6 text-neutral-500 font-body max-w-md mx-auto text-sm sm:text-base">
              From idea to launch, we cover every layer of your product.
            </p>
          </Reveal>

          {/* Desktop bento grid */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 h-[640px]">
            {/* Large top-left card */}
            <GlassCard className="col-span-2 row-span-1 bg-white border border-black/5 flex overflow-hidden p-0" hover delay={0.1}>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Code size={24} weight="fill" className="text-[#058789]" />
                  </div>
                  <ArrowUpRight size={20} className="text-black/20" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-3xl text-black mb-3">Software Engineering</h3>
                  <p className="text-sm text-neutral-500 font-body leading-relaxed mb-5 max-w-md">
                    We architect and build scalable, high-performance applications — web, mobile, and APIs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'TypeScript', 'Python'].map(t => (
                      <span key={t} className="text-xs font-body px-3 py-1 bg-black/5 text-black/70 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[45%] h-full zoom-image-wrap bg-[#F3F4F6]">
                <img src="/illustrations/software_eng.png" alt="Software Engineering" className="w-full h-full object-cover" />
              </div>
            </GlassCard>

            {/* Top-right */}
            <GlassCard className="col-span-1 row-span-1 bg-white border border-black/5 flex flex-col justify-between overflow-hidden p-0" hover delay={0.15}>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center mb-auto">
                  <Robot size={20} weight="fill" className="text-[#058789]" />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-xl text-black mb-1.5">AI Solutions</h3>
                  <p className="text-sm text-neutral-500 font-body leading-relaxed">Intelligent automation, LLMs, and ML pipelines.</p>
                </div>
              </div>
              <div className="h-32 zoom-image-wrap bg-neutral-100 shrink-0">
                <img src="/illustrations/ai_solutions.png" alt="AI Solutions" className="w-full h-full object-cover" />
              </div>
            </GlassCard>

            {/* Bottom-left */}
            <GlassCard className="col-span-1 row-span-1 bg-white border border-black/5 flex flex-col justify-between overflow-hidden p-0" hover delay={0.2}>
              <div className="h-32 zoom-image-wrap bg-neutral-100 shrink-0">
                <img src="/illustrations/product_design.png" alt="Product Design" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <PaintBrush size={20} weight="fill" className="text-[#058789]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-black mb-1.5">Product Design</h3>
                  <p className="text-sm text-neutral-500 font-body leading-relaxed">Research-driven, pixel-perfect UX & design systems.</p>
                </div>
              </div>
            </GlassCard>

            {/* Large bottom-right */}
            <motion.div 
              className="col-span-2 row-span-1 bg-[#058789] text-white flex overflow-hidden p-0 rounded-[20px] card-shadow cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            >
              <div className="w-[40%] h-full zoom-image-wrap bg-black/20">
                <img src="/illustrations/cloud_infra.png" alt="Cloud Infrastructure" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 flex items-center justify-center backdrop-blur-md">
                    <Cloud size={24} weight="fill" className="text-white" />
                  </div>
                  <Link to="/services" className="text-xs font-body font-semibold text-white/70 hover:text-white transition-colors flex items-center gap-1 bg-black/20 px-3 py-1.5 rounded-full">
                    View all services <ArrowUpRight size={12} />
                  </Link>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-3xl text-white mb-3">Cloud Infrastructure</h3>
                  <p className="text-sm text-white/80 font-body leading-relaxed mb-5 max-w-md">
                    Reliable, secure architectures built to scale with your business.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'CI/CD', 'Kubernetes'].map(t => (
                      <span key={t} className="text-xs font-body px-3 py-1 bg-white/20 text-white rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile CardSwap */}
          <div className="lg:hidden flex flex-col gap-4 pb-8 relative items-center w-full max-w-full overflow-hidden">
            <div className="mt-8 mb-4 h-[350px] w-full flex justify-center items-center">
              <CardSwap width={300} height={320} cardDistance={12} verticalDistance={12} pauseOnHover={true}>
                {services.map((s) => (
                  <Card key={s.title} className="bg-white border border-black/5 flex flex-col gap-0 p-0 overflow-hidden card-shadow">
                    <div className="h-40 zoom-image-wrap bg-neutral-100">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col h-full bg-white flex-1">
                      <div className="w-8 h-8 flex items-center justify-center mb-3 shrink-0">
                        <s.icon size={18} weight="fill" className="text-[#058789]" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-black mb-1.5">{s.title}</h3>
                      <p className="text-xs text-neutral-500 font-body leading-relaxed mb-3 line-clamp-3">{s.description}</p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work with grid background */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="relative z-10">
          <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <SectionLabel>Our Work</SectionLabel>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Featured Projects</h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-black bg-white card-shadow px-5 py-3 rounded-xl hover:bg-[#058789] hover:text-white transition-all duration-300">
              View all work <ArrowUpRight size={14} weight="bold" />
            </Link>
          </Reveal>

          {/* Desktop bento */}
          <div className="hidden sm:grid grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className={`${p.color} ${p.span} rounded-2xl p-8 flex flex-col justify-between cursor-pointer group card-shadow`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.015, boxShadow: '0 24px 80px rgba(0,0,0,0.12)' }}
                style={{ minHeight: 240 }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-body font-bold uppercase tracking-widest ${p.accent}`}>{p.category}</span>
                  <ArrowUpRight size={20} className={`${p.darkText ? 'text-black/20 group-hover:text-[#058789]' : 'text-white/20 group-hover:text-white'} transition-colors`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-3xl mb-3">{p.title}</h3>
                  <p className={`text-sm font-body ${p.darkText ? 'text-neutral-500' : 'text-white/60'}`}>{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="sm:hidden flex flex-col gap-4 pb-12 relative">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="mobile-sticky-stack"
                style={{
                  "--mobile-top": `calc(7rem + ${i * 14}px)`,
                  "--mobile-mt": i === 0 ? '0' : '2.5rem',
                  "--mobile-z": i + 10,
                } as React.CSSProperties}
              >
                <motion.div
                  className={`${p.color} rounded-[24px] p-6 flex flex-col gap-3 cursor-pointer overflow-hidden relative w-full h-full`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-50 opacity-40 md:hidden" />
                  <span className={`relative z-10 text-xs font-body font-bold uppercase tracking-widest ${p.accent}`}>{p.category}</span>
                  <h3 className="relative z-10 font-heading font-bold text-2xl mt-2">{p.title}</h3>
                  <p className={`relative z-10 text-sm font-body ${p.darkText ? 'text-neutral-500' : 'text-white/60'}`}>{p.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 border-t border-black/5 relative">
        <div className="absolute inset-0 noise" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>What Clients Say</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Trusted by Teams<br className="hidden sm:block" /> That Ship</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 md:pb-0 relative">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="mobile-sticky-stack md:static md:contents"
                style={{
                  "--mobile-top": `calc(7rem + ${i * 14}px)`,
                  "--mobile-mt": i === 0 ? '0' : '2.5rem',
                  "--mobile-z": i + 10,
                } as React.CSSProperties}
              >
                <Reveal 
                  delay={i * 0.1} 
                  direction="up" 
                  className="w-full h-full"
                >
                  <div className="bg-white border border-black/5 card-shadow rounded-[24px] p-8 flex flex-col gap-6 h-full hover:card-shadow-lg transition-shadow overflow-hidden relative">
                    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-50 opacity-40 md:hidden" />
                    <Quotes size={32} weight="fill" className="text-[#058789]/20 relative z-10" />
                    <p className="text-sm font-body text-neutral-600 leading-relaxed flex-1 italic relative z-10">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-black/5 relative z-10">
                      <div className="w-10 h-10 flex items-center justify-center text-[#058789]">
                        <span className="font-heading font-bold text-sm text-[#058789]">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-heading font-bold text-black">{t.name}</p>
                        <p className="text-xs font-body text-neutral-400 mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#058789]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-6xl sm:text-8xl text-white tracking-tight mb-6 drop-shadow-lg">
              READY TO BUILD?
            </h2>
            <p className="text-neutral-300 font-body text-base sm:text-lg mb-12 max-w-lg mx-auto">
              Let's turn your vision into a world-class product. Tell us what you're building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#058789] text-white font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#046f70] transition-colors shadow-lg shadow-[#058789]/20"
              >
                Start a Project
                <ArrowUpRight size={16} weight="bold" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
