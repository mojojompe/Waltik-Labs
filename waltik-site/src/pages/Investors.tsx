import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GlobeHemisphereWest,
  UsersThree,
  Lightning,
  ShieldCheck,
  ChartLineUp,
  EnvelopeSimple
} from '@phosphor-icons/react'
import { SEO } from '../components/ui/SEO'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { MobileCarousel } from '../components/ui/MobileCarousel'

/* ── Data ─────────────────────────────────────────────────────────── */
const tractionMetrics = [
  { label: 'Active Projects', value: '10+', suffix: '' },
  { label: 'Global Talent', value: 'Top 1%', suffix: '' },
  { label: 'Target Markets', value: '3', suffix: '' },
  { label: 'Uptime Delivery', value: '99.9', suffix: '%' }
]

const features = [
  {
    icon: GlobeHemisphereWest,
    title: 'Massive Market Opportunity',
    description: 'We build digital infrastructure for trillion-dollar industries: Real Estate (iléSure), Healthcare (Outbreak IQ), and Logistics (Safe Route Ai).'
  },
  {
    icon: Lightning,
    title: 'Unmatched Velocity',
    description: 'Our proprietary internal tooling and AI-first engineering culture allow us to ship enterprise-grade products 3x faster than industry standard.'
  },
  {
    icon: UsersThree,
    title: 'World-Class Team',
    description: 'Founded by relentless builders with deep expertise in software architecture, cloud infrastructure, product design, and finance.'
  },
  {
    icon: ShieldCheck,
    title: 'Engineered for Scale',
    description: 'Every product is built with military-grade security and robust cloud architectures to handle millions of requests from day one.'
  }
]

export default function Investors() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="Call for Investors | Waltik Labs"
        description="Invest in the future of technology with Waltik Labs. We build scalable software, AI systems, and digital platforms."
        canonicalUrl="https://waltiklabs.com/investors"
      />

      {/* Hero Section */}
      <Hero
        word="INVEST"
        headline="Back the Future of Technology"
        subtext="We are building the digital infrastructure that will power the next decade of global innovation. Partner with us."
        floatingCardTitle="Pitch Deck"
        floatingCardCopy="Request our detailed pitch deck and financials."
        floatingCardCta="Request Deck"
        floatingCardHref="mailto:support.waltiklabs@gmail.com?subject=Investor Pitch Deck Request"
      />

      {/* The Opportunity */}
      <section className="relative py-24 bg-white border-t border-black/5">
        <div className="absolute inset-0 noise" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">
              Building for Trillion-Dollar Markets
            </h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
            <p className="mt-6 text-neutral-500 font-body max-w-2xl mx-auto text-sm sm:text-base">
              At Waltik Labs, we identify massive inefficiencies in traditional industries and deploy cutting-edge AI and software systems to solve them at scale.
            </p>
          </Reveal>

          {/* Desktop Bento Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {features.map((feature, i) => {
              const isWide = i === 0 || i === 3;
              return (
                <GlassCard 
                  key={feature.title}
                  delay={i * 0.1}
                  className={`relative overflow-hidden group bg-white border border-black/5 p-8 card-shadow flex flex-col hover:-translate-y-2 transition-transform duration-500 ${isWide ? 'col-span-2' : 'col-span-1'}`}
                >
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#058789]/5 rounded-full blur-[40px] group-hover:bg-[#058789]/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 text-8xl font-heading font-black text-black/[0.03] select-none pointer-events-none group-hover:text-black/[0.05] transition-colors duration-500">
                    0{i + 1}
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-6">
                      <feature.icon size={32} weight="duotone" className="text-[#058789]" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-black mb-3">{feature.title}</h3>
                    <p className="text-base text-neutral-500 font-body leading-relaxed max-w-lg">{feature.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <MobileCarousel>
              {features.map((feature, i) => (
                <GlassCard 
                  key={feature.title}
                  className="relative overflow-hidden bg-white border border-black/5 p-8 card-shadow flex flex-col h-full min-h-[280px]"
                >
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#058789]/5 rounded-full blur-[40px]" />
                  <div className="absolute bottom-4 right-4 text-7xl font-heading font-black text-black/[0.03] select-none pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-6">
                      <feature.icon size={28} weight="duotone" className="text-[#058789]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-black mb-3">{feature.title}</h3>
                    <p className="text-sm text-neutral-500 font-body leading-relaxed">{feature.description}</p>
                  </div>
                </GlassCard>
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>

      {/* Traction & Execution */}
      <section className="bg-black py-24 relative overflow-hidden text-white">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#058789]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 grid-lines-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel className="border-white/20 bg-white/5 text-white/70">Execution & Traction</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-4">
              Numbers that Speak.
            </h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full" />
          </Reveal>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {tractionMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:to-[#058789] transition-all duration-500">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-sm font-body text-white/50 uppercase tracking-widest mt-2">{metric.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Waltik Labs */}
      <section className="py-24 bg-[#F3F4F6] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionLabel>Our Edge</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">
              Why Partner With Us?
            </h2>
            <div className="w-16 h-1 bg-[#058789] mx-auto mt-6 rounded-full opacity-60" />
          </Reveal>

          <div className="bg-white rounded-[40px] p-8 sm:p-16 card-shadow border border-black/5 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#058789]/5 rounded-full blur-[80px]" />
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 font-heading font-bold text-2xl">01</div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-black mb-2">Unfair Technical Advantage</h3>
                  <p className="text-neutral-500 font-body leading-relaxed">
                    Our team isn't just operators; we are deep-tech engineers. We build our own internal infrastructure and AI agents that allow us to out-build and out-innovate competitors with significantly larger headcount.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-black/5" />
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 font-heading font-bold text-2xl">02</div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-black mb-2">Capital Efficiency</h3>
                  <p className="text-neutral-500 font-body leading-relaxed">
                    We deploy capital directly into product growth and market acquisition, not bloated technical overhead. We achieve 10x output through intelligent automation.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-black/5" />
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 font-heading font-bold text-2xl">03</div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-black mb-2">Visionary Leadership</h3>
                  <p className="text-neutral-500 font-body leading-relaxed">
                    Led by founders who combine financial acumen with product mastery. We don't just build code; we build sustainable, high-margin technology businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-32 relative">
        <div className="absolute inset-0 noise" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center justify-center w-20 h-20 text-[#058789] mb-8">
              <ChartLineUp size={40} weight="duotone" />
            </div>
            <h2 className="font-heading font-bold text-5xl sm:text-7xl text-black mb-6 tracking-tight">
              Ready to Accelerate?
            </h2>
            <p className="text-neutral-500 font-body text-lg mb-12 max-w-xl mx-auto">
              We are currently in discussions with strategic partners and visionary investors. Reach out to access our data room and schedule an introductory call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support.waltiklabs@gmail.com?subject=Investor Inquiry"
                className="inline-flex items-center gap-2 bg-[#058789] text-white font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#046f70] transition-colors card-shadow shadow-[#058789]/20 w-full sm:w-auto justify-center"
              >
                <EnvelopeSimple size={20} weight="bold" />
                Contact Investor Relations
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-transparent text-black font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-black/5 transition-colors border-1.5 border-black/10 w-full sm:w-auto justify-center"
              >
                Meet the Team <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
