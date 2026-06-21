import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightbulb, Trophy, Users, ArrowUpRight,
  Rocket, Heart, Globe, Code,
  LinkedinLogo, TwitterLogo, GithubLogo
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'

const heroFeatureCards = [
  { icon: Lightbulb, title: 'Innovation', subtitle: 'Pushing boundaries daily' },
  { icon: Trophy, title: 'Excellence', subtitle: 'Uncompromising quality' },
  { icon: Users, title: 'Collaboration', subtitle: 'Together we build better' },
]

const values = [
  { icon: Lightbulb, title: 'Innovation First', description: 'We\'re curious by nature. We constantly explore new ideas, technologies, and approaches to deliver products that are truly ahead of the curve.' },
  { icon: Trophy, title: 'Uncompromising Excellence', description: 'We don\'t ship mediocre. Every pixel, every function, every interaction is deliberate and thoughtful.' },
  { icon: Heart, title: 'People-Centred', description: 'The best technology is human technology. We build products that serve real people with real needs.' },
  { icon: Globe, title: 'Global Perspective', description: 'We think globally and act locally. Our team and clients span continents, giving us a diverse and wide-ranging perspective.' },
  { icon: Rocket, title: 'Move with Purpose', description: 'Speed matters, but so does direction. We move fast with a clear plan, avoiding wasted effort on the wrong problems.' },
  { icon: Code, title: 'Craft & Ownership', description: 'We take pride in the code and designs we produce. Ownership means we care deeply about the outcome, not just the output.' },
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    description: 'Visionary leader driving Waltik Labs\' strategic direction with 15+ years in tech.',
    image: '/illustrations/team_ceo.png',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Marcus Okafor',
    role: 'Head of Engineering',
    description: 'Architect behind our technical excellence and system design. Former lead at a major cloud provider.',
    image: '/illustrations/team_engineer.png',
    social: { github: '#', linkedin: '#' }
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Designer',
    description: 'Crafting the award-winning interfaces our clients love. Obsessed with micro-interactions.',
    image: '/illustrations/team_designer.png',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'David Kim',
    role: 'AI Research Lead',
    description: 'Driving our AI and ML capabilities forward. PhD in Deep Learning.',
    image: '/illustrations/team_ai.png',
    social: { github: '#', twitter: '#' }
  },
]

const timeline = [
  { year: '2019', title: 'Founded', description: 'Waltik Labs was founded with a mission to build exceptional digital products.' },
  { year: '2020', title: 'First 10 Clients', description: 'We hit our first 10 client milestone, delivering everything from MVPs to full-scale platforms.' },
  { year: '2021', title: 'AI Division Launched', description: 'We launched our dedicated AI & ML practice, helping clients unlock intelligent automation.' },
  { year: '2022', title: 'Team Doubles', description: 'Rapid growth saw our team double in size as demand for our work soared.' },
  { year: '2023', title: 'International Clients', description: 'We began working with clients across 3 continents, from London to Singapore.' },
  { year: '2024', title: 'Award Recognition', description: 'Recognised by multiple industry bodies for design excellence and technical innovation.' },
  { year: '2025', title: 'The Future', description: 'Expanding our product and AI capabilities to serve the next generation of bold businesses.' },
]

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <Hero
        word="Our Story"
        headline="We Are Waltik Labs"
        subtext="A team of builders, designers, engineers, and innovators creating technology that matters."
        featureCards={heroFeatureCards}
        floatingCardTitle="Meet the Team"
        floatingCardCopy="Get to know the people behind every pixel and line of code."
        floatingCardCta="Say Hello"
        floatingCardHref="/contact"
      />

      {/* Mission & Vision */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>Why We Exist</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Mission & Vision</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
          </Reveal>

          {/* Single Interactive Mission/Vision Card */}
          <Reveal direction="up">
            <div className="bg-black card-shadow-2xl rounded-[40px] p-8 sm:p-14 lg:p-20 flex flex-col min-h-[460px] relative overflow-hidden group">
              {/* Background glows */}
              <div 
                className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-colors duration-700 ${activeTab === 'mission' ? 'bg-[#058789]/30' : 'bg-white/10'}`} 
              />
              
              {/* Controls */}
              <div className="relative z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full w-fit mb-12 border border-white/10">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-heading font-bold uppercase tracking-wider transition-colors z-10 ${activeTab === 'mission' ? 'text-black' : 'text-white/60 hover:text-white'}`}
                >
                  {activeTab === 'mission' && (
                    <motion.div layoutId="mv-pill" className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm" />
                  )}
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-heading font-bold uppercase tracking-wider transition-colors z-10 ${activeTab === 'vision' ? 'text-black' : 'text-white/60 hover:text-white'}`}
                >
                  {activeTab === 'vision' && (
                    <motion.div layoutId="mv-pill" className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm" />
                  )}
                  Vision
                </button>
              </div>

              {/* Dynamic Content */}
              <div className="relative z-10 mt-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'mission' ? (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <h3 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-4xl">
                        To engineer digital products, platforms, and intelligent systems that help businesses scale, compete, and create meaningful impact.
                      </h3>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="vision"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <h3 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-4xl">
                        To be the most trusted technology partner for ambitious companies building the next generation of great products.
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values — Bento grid */}
      <section className="bg-white border-t border-black/5 py-24 relative">
        <div className="absolute inset-0 noise" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Core Values</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
          </Reveal>

          {/* Desktop bento */}
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4">
            {values.map((v, i) => (
              <GlassCard
                key={v.title}
                delay={i * 0.07}
                className={`flex flex-col gap-5 p-8 bg-white border border-black/5 card-shadow ${i === 0 ? 'md:col-span-2' : ''} ${i === 5 ? 'md:col-span-2' : ''}`}
                hover
              >
                <div className="w-12 h-12 bg-[#058789]/10 rounded-xl flex items-center justify-center">
                  <v.icon size={22} weight="fill" className="text-[#058789]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-black mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 font-body leading-relaxed">{v.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="md:hidden flex flex-col gap-4 pb-12 relative">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="mobile-sticky-stack"
                style={{
                  "--mobile-top": `calc(7rem + ${i * 14}px)`,
                  "--mobile-mt": i === 0 ? '0' : '2.5rem',
                  "--mobile-z": i + 10,
                } as React.CSSProperties}
              >
                <GlassCard 
                  delay={i * 0.06} 
                  className="flex flex-col gap-4 p-6 bg-white border border-black/5 overflow-hidden relative w-full h-full"
                >
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-50 opacity-40 md:hidden" />
                  <div className="w-10 h-10 bg-[#058789]/10 rounded-xl flex items-center justify-center relative z-10">
                    <v.icon size={20} weight="fill" className="text-[#058789]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-lg text-black mb-2">{v.title}</h3>
                    <p className="text-sm text-neutral-500 font-body leading-relaxed">{v.description}</p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 relative">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>The People</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Our Team</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
            <p className="mt-6 text-neutral-500 font-body max-w-md mx-auto text-sm sm:text-base">
              A small, elite team with a big vision. Everyone here ships.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[360px] pb-12 md:pb-0 relative">
            {team.map((member, i) => {
              let spanClass = ''
              if (i === 0) spanClass = 'md:col-span-2 md:row-span-1'
              else if (i === 1) spanClass = 'md:col-span-1 md:row-span-2'
              else spanClass = 'md:col-span-1 md:row-span-1'

              return (
                <div
                  key={member.name}
                  className={`mobile-sticky-stack md:static md:contents`}
                  style={{
                    "--mobile-top": `calc(7rem + ${i * 14}px)`,
                    "--mobile-mt": i === 0 ? '0' : '2.5rem',
                    "--mobile-z": i + 10,
                  } as React.CSSProperties}
                >
                  <Reveal 
                    delay={i * 0.05} 
                    className={`${spanClass} w-full h-full`}
                  >
                    <div className="relative bg-black rounded-[32px] overflow-hidden group h-full card-shadow cursor-default w-full">
                      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-50 md:hidden" />
                      <div className="absolute inset-0 zoom-image-wrap">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                        <div>
                          <p className="text-xs font-body font-bold text-[#058789] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{member.role}</p>
                          <h3 className="font-heading font-bold text-3xl text-white mb-3">{member.name}</h3>
                          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                            <p className="text-sm font-body text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                              {member.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 mt-0 group-hover:mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          {member.social.linkedin && (
                            <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#058789] hover:scale-110 transition-all" aria-label="LinkedIn">
                              <LinkedinLogo size={18} weight="fill" />
                            </a>
                          )}
                          {member.social.twitter && (
                            <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#058789] hover:scale-110 transition-all" aria-label="Twitter">
                              <TwitterLogo size={18} weight="fill" />
                            </a>
                          )}
                          {member.social.github && (
                            <a href={member.social.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#058789] hover:scale-110 transition-all" aria-label="GitHub">
                              <GithubLogo size={18} weight="fill" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <SectionLabel className="text-[#058789]">Our Journey</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-4">Company Timeline</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
          </Reveal>

          {/* Desktop horizontal scroll */}
          <div className="hidden lg:flex gap-8 overflow-x-auto no-scrollbar pb-8 pt-4 px-4 -mx-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.07} direction="up">
                <div className="shrink-0 w-[280px] flex flex-col gap-5 group">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl text-[#058789] group-hover:scale-110 transition-transform origin-left">{t.year}</span>
                    <div className="flex-1 h-px bg-white/10 group-hover:bg-[#058789]/50 transition-colors" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-white/10 transition-colors h-full">
                    <h4 className="font-heading font-bold text-xl text-white mb-2">{t.title}</h4>
                    <p className="text-sm text-white/60 font-body leading-relaxed">{t.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden flex flex-col">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="flex gap-6 py-8 border-b border-white/10 last:border-0">
                  <span className="font-display text-3xl text-[#058789] shrink-0 w-16 pt-1">{t.year}</span>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-white mb-2">{t.title}</h4>
                    <p className="text-sm text-white/50 font-body leading-relaxed">{t.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-32 relative">
        <div className="absolute inset-0 noise" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-heading font-bold text-5xl sm:text-7xl text-black mb-6 tracking-tight">
              Want to Work<br /> With Us?
            </h2>
            <p className="text-neutral-500 font-body text-lg mb-12 max-w-md mx-auto">
              Whether as a client, partner, or future team member — we'd love to talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#058789] text-white font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#046f70] transition-colors card-shadow shadow-[#058789]/20"
            >
              Get in Touch
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
