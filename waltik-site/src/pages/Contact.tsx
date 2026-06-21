import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightning, Globe, Handshake,
  ArrowUpRight, Envelope, Phone, MapPin,
  GithubLogo, LinkedinLogo, TwitterLogo,
  Plus, Minus,
} from '@phosphor-icons/react'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { GlassCard, SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'

const heroFeatureCards = [
  { icon: Lightning, title: 'Fast Response', subtitle: 'Reply within 24 hours' },
  { icon: Globe, title: 'Global Reach', subtitle: 'Clients across 3 continents' },
  { icon: Handshake, title: 'Strategic Partnership', subtitle: 'Long-term collaboration' },
]

const faqs = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. An MVP typically takes 6–10 weeks, while a full-scale product can take 3–6 months. We always provide a detailed timeline during discovery.' },
  { q: 'What is your engagement model?', a: 'We work on a fixed-scope or time-and-materials basis depending on the project. We also offer ongoing retainer arrangements for long-term product development.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We love working with early-stage startups and have helped many founders turn an idea into a funded, production-ready product.' },
  { q: 'What happens after launch?', a: 'We offer post-launch support and maintenance packages. We see ourselves as a long-term partner, not just a vendor — we\'re invested in your success.' },
  { q: 'Can you work with our in-house team?', a: 'Yes. We frequently embed within client engineering teams, acting as an extension of your workforce for design, development, or strategy.' },
]

const contactInfo = [
  { icon: Envelope, label: 'Email', value: 'hello@waltiklabs.com', href: 'mailto:hello@waltiklabs.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
  { icon: MapPin, label: 'Location', value: 'Remote-first · Global', href: '#' },
]

const socials = [
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: GithubLogo, href: '#', label: 'GitHub' },
]

const projectTypes = ['Web Application', 'Mobile App', 'AI / ML Project', 'UI/UX Design', 'Cloud Infrastructure', 'Other']

/* ── FAQ Accordion ───────────────────────────────────────────────── */
function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="border-b border-black/8 last:border-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-heading font-semibold text-base text-black group-hover:text-neutral-600 transition-colors pr-4">
          {q}
        </span>
        <span className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-200">
          {open ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm font-body text-neutral-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Contact Form ─────────────────────────────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
          <motion.span
            className="text-white text-xl font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          >
            ✓
          </motion.span>
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl text-black mb-2">Message Sent!</h3>
          <p className="text-sm text-neutral-500 font-body max-w-xs">
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      </motion.div>
    )
  }

  const inputClass = 'w-full bg-white border border-black/8 rounded-xl px-4 py-3 text-sm font-body text-black placeholder:text-neutral-400 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/6 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-body font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Name</label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Email</label>
          <input
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-body font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Project Type</label>
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select a type...</option>
          {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-body font-medium text-neutral-500 mb-1.5 uppercase tracking-wider">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-black text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-neutral-800 transition-colors w-full"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        Send Message
        <ArrowUpRight size={14} weight="bold" />
      </motion.button>
    </form>
  )
}

export default function Contact() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <Hero
        word="Connect"
        headline="Let's Build Something Great"
        subtext="Whether you have an idea, project, or challenge, we're ready to help."
        featureCards={heroFeatureCards}
        floatingCardTitle="Schedule a Call"
        floatingCardCopy="Book a 30-minute discovery call. No commitment, just conversation."
        floatingCardCta="Book a Call"
        floatingCardHref="#contact-form"
      />

      {/* Contact split */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <Reveal className="text-center mb-14">
          <SectionLabel>Reach Out</SectionLabel>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Get In Touch</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 sm:p-10">
              <h3 className="font-heading font-bold text-xl text-black mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </Reveal>

          {/* Info sidebar */}
          <Reveal direction="right" className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info */}
            <div className="glass rounded-2xl p-7 flex flex-col gap-5">
              <h3 className="font-heading font-bold text-lg text-black">Direct Contact</h3>
              {contactInfo.map(info => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 bg-black/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-200">
                    <info.icon size={15} weight="fill" className="text-black/50 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-neutral-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm font-body font-medium text-black group-hover:text-neutral-600 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-7">
              <h3 className="font-heading font-bold text-base text-black mb-4">Follow Along</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} weight="fill" className="text-black/50 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-black rounded-2xl p-7 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-body text-white/60 uppercase tracking-widest">Currently Available</span>
              </div>
              <p className="font-heading font-semibold text-base text-white leading-snug">
                Taking on new projects for Q3 2025.
              </p>
              <p className="text-xs text-white/40 font-body">Limited spots available.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-black/6 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">FAQ</h2>
          </Reveal>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} idx={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
