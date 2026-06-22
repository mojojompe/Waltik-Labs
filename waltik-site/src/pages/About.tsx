import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightbulb, Trophy, Users,
  Rocket, Heart, Globe, Code,
  LinkedinLogo, TwitterLogo, GithubLogo,
  Check, ArrowUpRight
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'
import DOMCircularGallery from '../components/ui/DOMCircularGallery'

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

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  biography: React.ReactNode;
  image: string;
  social: { linkedin?: string; twitter?: string; github?: string; website?: string };
}

const team: TeamMember[] = [
  {
    name: 'Richard Kamsiriochi',
    role: 'Co-Founder',
    description: 'Management, Finances & Innovation',
    biography: (
      <>
        <p>
          Kamsiriochi Ivanna Richard is a visionary leader with a profound background in management and finance. He steers Waltik Labs towards strategic growth, ensuring innovation remains at the core of all operations. Under his leadership, the company has scaled its capabilities and continues to deliver outstanding value to its clients and partners.
        </p>
        <p>
          Further details are currently being updated and will be available soon.
        </p>
      </>
    ),
    image: '/Team/Kamsi.jpeg',
    social: { linkedin: 'https://www.linkedin.com/in/kamsi-richard', github: 'https://github.com/kamsirichard' }
  },
  {
    name: 'Jompe Emmanuel',
    role: 'Co-Founder',
    description: 'Platforms, Integrations & User Interface',
    biography: (
      <>
        <p>
          <strong>Emmanuel Ayomiposi Jompe</strong> is a Nigerian software engineer, technology entrepreneur, and problem-solver passionate about building innovative digital solutions that address real-world challenges. With expertise spanning software development, systems design, and product strategy, he focuses on creating scalable platforms that deliver meaningful impact across web, mobile, and emerging technology ecosystems.
        </p>
        <p>
          As a technology innovator and founder, Emmanuel is dedicated to building software products that simplify processes, improve decision-making, and create value for individuals, organizations, and communities. His work combines technical excellence with a strong understanding of user needs, enabling him to develop solutions that are both practical and impactful.
        </p>
        
        <h4 className="font-heading font-semibold text-black mt-6 mb-2">Technical Expertise</h4>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Full-Stack Software Development</li>
          <li>Software Architecture & System Design</li>
          <li>Web Application Development</li>
          <li>Mobile Application Development (iOS & Android)</li>
          <li>Database Design & Management</li>
          <li>Cloud Computing & Deployment</li>
          <li>API Development & Integration</li>
          <li>Artificial Intelligence & Intelligent Systems</li>
          <li>Product Development & Technology Strategy</li>
          <li>User Experience (UX) Design Principles</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Business Process Automation</li>
          <li>Software Testing & Quality Assurance</li>
        </ul>

        <h4 className="font-heading font-semibold text-black mt-6 mb-2">Projects & Ventures</h4>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-black block">EduPlanner</span>
            <p>An educational planning and management platform designed to streamline academic processes, improve organization, and enhance productivity for students, educators, and educational institutions through technology-driven solutions.</p>
          </div>
          <div>
            <span className="font-semibold text-black block">Finalytics</span>
            <p>A financial analytics and insights platform focused on transforming financial data into actionable intelligence. The platform helps individuals and organizations make informed decisions through reporting, analysis, and data visualization tools.</p>
          </div>
        </div>

        <h4 className="font-heading font-semibold text-black mt-6 mb-2">Professional Vision</h4>
        <p>
          Driven by innovation and continuous improvement, Emmanuel believes technology should be used to solve meaningful problems and create opportunities for growth. His mission is to develop world-class digital products that empower users, improve efficiency, and contribute to technological advancement across Africa and beyond.
        </p>
        <p>
          Beyond software engineering, Emmanuel is committed to lifelong learning, leadership development, and fostering innovation within the technology ecosystem. Through his work, he strives to bridge the gap between ideas and execution, transforming challenges into impactful solutions that make a lasting difference.
        </p>
      </>
    ),
    image: '/Team/Emmanuel.jpeg',
    social: { github: 'https://github.com/mojojompe', linkedin: 'https://www.linkedin.com/in/emmanuel-jompe', website: 'https://jompeportfolio.vercel.app' }
  },
  {
    name: 'Olajide Basit',
    role: 'Co-Founder',
    description: 'Infrastructure, API management & Servers',
    biography: (
      <>
        <p>
          <strong>Basit Folasanmi Olajide</strong> is a Nigerian software engineer, product builder, and technology entrepreneur focused on creating innovative digital solutions that solve real-world problems across education, real estate, fintech, and artificial intelligence.
        </p>
        <p>
          As a Co-founder of Waltik Labs, Basit leads the development of scalable technology products, combining strong technical expertise with product strategy and business execution. His work spans mobile application development, full-stack software engineering, cloud architecture, API integrations, and AI-powered systems.
        </p>
        <p>
          Basit has built and contributed to multiple technology platforms, including PokoWave, Jonify, Olyves, YodoPay.
        </p>

        <h4 className="font-heading font-semibold text-black mt-6 mb-2">Technical Expertise</h4>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Mobile Application Development (React Native, Expo)</li>
          <li>Full-Stack Web Development</li>
          <li>Backend System Architecture</li>
          <li>RESTful API Design and Integration</li>
          <li>Database Design and Optimization</li>
          <li>Cloud Infrastructure and Deployment</li>
          <li>Fintech Integrations and Payment Systems</li>
          <li>Product Design and User Experience Strategy</li>
          <li>Artificial Intelligence and Machine Learning Systems</li>
          <li>Scalable Software Architecture</li>
          <li>Authentication and Security Systems</li>
          <li>Startup Technology Leadership</li>
        </ul>

        <p className="mt-4">
          Beyond software development, Basit is deeply interested in the intersection of artificial intelligence, automation, and business innovation. He is currently exploring advanced AI systems capable of adaptive learning and route optimization, with a focus on creating intelligent solutions that continuously improve through real-world data.
        </p>
        <p>
          Driven by a passion for innovation and impact, Basit combines technical excellence with entrepreneurial vision to build products that improve efficiency, accessibility, and user experiences across multiple industries.
        </p>
      </>
    ),
    image: '/Team/Basit.jpeg',
    social: { linkedin: 'https://www.linkedin.com/in/basit-olajide', github: 'https://github.com/folabas' }
  },
]

const standards = [
  {
    title: 'Uncompromising Aesthetics',
    description: 'Every pixel has a purpose. We blend world-class UI design with seamless UX to create products your users will obsess over.',
    icon: Heart,
    color: 'from-pink-500/20 to-rose-500/5'
  },
  {
    title: 'Engineered for Scale',
    description: 'Built on robust cloud architectures capable of handling millions of requests without breaking a sweat.',
    icon: Rocket,
    color: 'from-blue-500/20 to-cyan-500/5'
  },
  {
    title: 'AI-First Approach',
    description: 'We integrate intelligent machine learning models that solve real business bottlenecks and drive unprecedented efficiency.',
    icon: Lightbulb,
    color: 'from-amber-500/20 to-yellow-500/5'
  }
]

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="About Us | Waltik Labs"
        description="Learn about Waltik Labs, our mission, vision, and the team behind our world-class digital products."
        canonicalUrl="https://waltiklabs.com/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Waltik Labs",
          "url": "https://waltiklabs.com/about",
          "description": "Learn about Waltik Labs, our mission, vision, and the team behind our world-class digital products."
        }}
      />
      <Hero
        word="TALENT"
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
              
              {/* White Grid */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
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

      {/* Team Bento Grid */}
      <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 relative border-t border-black/5">
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
              else spanClass = 'md:col-span-2 md:row-span-1'

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
                    className={`${spanClass} w-full h-full cursor-pointer`}
                  >
                    <div 
                      onClick={() => setSelectedMember(member)}
                      className="relative bg-black rounded-[32px] overflow-hidden group h-full card-shadow w-full"
                    >
                      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-50 md:hidden" />
                      <div className="absolute inset-0 zoom-image-wrap">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                        <div>
                          <p className="text-xs font-body font-bold text-[#058789] uppercase tracking-widest mb-2">{member.role}</p>
                          <h3 className="font-heading font-bold text-3xl text-white mb-3">{member.name}</h3>
                          <div>
                            <p className="text-sm font-body text-white/70 leading-relaxed">
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
                <div className="w-12 h-12 flex items-center justify-center">
                  <v.icon size={28} weight="duotone" className="text-[#058789]" />
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
                  <div className="w-10 h-10 flex items-center justify-center relative z-10">
                    <Check size={20} weight="bold" className="text-[#058789]" />
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

      {/* The Waltik Standard */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>How We Build</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">The Waltik Standard</h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
            <p className="mt-6 text-neutral-500 font-body max-w-2xl mx-auto text-sm sm:text-base">
              We don't just write code. We craft digital experiences designed to dominate markets and create lasting impact.
            </p>
          </Reveal>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {standards.map((std, i) => (
              <GlassCard 
                key={std.title}
                delay={i * 0.1}
                className="bg-white border border-black/5 p-10 card-shadow flex flex-col justify-between relative overflow-hidden group min-h-[420px]"
                hover
              >
                {/* Massive Number */}
                <div className="absolute -bottom-8 -right-4 text-[12rem] font-heading font-black text-black/[0.03] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 pointer-events-none select-none">
                  0{i + 1}
                </div>
                
                {/* Gradient Blob */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${std.color} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:scale-150 group-hover:opacity-100 opacity-60 transition-all duration-700`} />

                <div className="w-16 h-16 flex items-center justify-center shrink-0 relative z-10">
                  <std.icon size={28} weight="duotone" className="text-[#058789]" />
                </div>
                
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className="font-heading font-bold text-3xl text-black mb-4 group-hover:text-[#058789] transition-colors">{std.title}</h3>
                  <p className="text-neutral-500 font-body text-base leading-relaxed">{std.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Mobile Circular Gallery Layout */}
          <div className="md:hidden overflow-hidden -mx-4 sm:-mx-6 mt-8 pb-12">
            <DOMCircularGallery bendStrength={60} rotationStrength={10}>
              {standards.map((std, i) => (
                <GlassCard 
                  key={std.title}
                  delay={i * 0.06} 
                  className="flex flex-col gap-5 p-8 bg-white border border-black/5 overflow-hidden relative w-[280px] min-h-[300px] card-shadow mx-2"
                >
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-50 opacity-40" />
                  
                  {/* Number */}
                  <div className="absolute -bottom-4 -right-4 text-[8rem] font-heading font-black text-black/[0.03] pointer-events-none select-none leading-none">
                    0{i + 1}
                  </div>

                  <div className="w-12 h-12 flex items-center justify-center relative z-10 shrink-0">
                    <std.icon size={24} weight="duotone" className="text-[#058789]" />
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-heading font-bold text-2xl text-black mb-3">{std.title}</h3>
                    <p className="text-sm text-neutral-500 font-body leading-relaxed">{std.description}</p>
                  </div>
                </GlassCard>
              ))}
            </DOMCircularGallery>
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

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
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
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-2xl"
            >
              {/* Left Image (Desktop) / Top Image (Mobile) */}
              <div className="w-full sm:w-2/5 h-64 sm:h-auto bg-neutral-100 relative overflow-hidden shrink-0">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors sm:hidden"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Right Content */}
              <div className="p-6 sm:p-10 flex-1 overflow-y-auto bg-white rounded-t-3xl sm:rounded-none relative -mt-6 sm:mt-0">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full hidden sm:flex items-center justify-center text-black transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className="text-xs font-body font-bold text-[#058789] uppercase tracking-widest mb-2">{selectedMember.role}</p>
                <h3 className="font-heading font-bold text-3xl text-black mb-1">{selectedMember.name}</h3>
                <p className="text-sm text-neutral-500 font-body mb-6">{selectedMember.description}</p>
                
                <h4 className="font-heading font-semibold text-lg text-black mb-3">Biography</h4>
                <div className="text-neutral-600 font-body text-[15px] sm:text-base leading-relaxed mb-8 space-y-4">
                  {selectedMember.biography}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                  <span className="text-sm font-heading font-semibold text-black">Connect:</span>
                  <div className="flex items-center gap-2">
                    {selectedMember.social.website && (
                      <a href={selectedMember.social.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-[#058789] hover:text-white transition-colors" aria-label="Website">
                        <Globe size={18} weight="fill" />
                      </a>
                    )}
                    {selectedMember.social.linkedin && (
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-[#058789] hover:text-white transition-colors" aria-label="LinkedIn">
                        <LinkedinLogo size={18} weight="fill" />
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-[#058789] hover:text-white transition-colors" aria-label="GitHub">
                        <GithubLogo size={18} weight="fill" />
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-[#058789] hover:text-white transition-colors" aria-label="Twitter">
                        <TwitterLogo size={18} weight="fill" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
