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
import { SectionLabel } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'

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
  { icon: Envelope, label: 'Email', value: 'support.waltiklabs@gmail.com', href: 'mailto:support.waltiklabs@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 807 145 5374', href: 'tel:+15550000000' },
  { icon: MapPin, label: 'Location', value: 'Remote · Global', href: '#' },
]

const socials = [
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: GithubLogo, href: 'https://github.com/Waltik-Technologies', label: 'GitHub' },
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
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_kdyz2m3',
          template_id: 'template_b9h31sv',
          user_id: 'YOUR_PUBLIC_KEY', // You need to replace this with your actual Public Key from EmailJS Account > API Keys
          template_params: {
            from_name: form.name,
            reply_to: form.email,
            project_type: form.type,
            message: form.message
          }
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const text = await response.text()
        setErrorMsg('Failed to send. Please check your EmailJS Public Key.')
        console.error('EmailJS Error:', text)
      }
    } catch (err) {
      console.error(err)
      setErrorMsg('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-white font-bold text-xl"
          >
            ✓
          </motion.span>
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl text-black mb-2">Message Sent!</h3>
          <p className="font-body text-neutral-500 max-w-sm mx-auto">
            Thanks for reaching out, {form.name}. We'll get back to you at {form.email} shortly.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', type: '', message: '' })
          }}
          className="mt-4 px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-body font-medium rounded-full transition-colors text-sm"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {errorMsg && (
        <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium">
          {errorMsg}
        </div>
      )}
      
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-body font-semibold uppercase tracking-wider text-neutral-500 ml-1">Name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="John Doe"
            className="w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 font-body text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#058789]/20 focus:border-[#058789] transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-body font-semibold uppercase tracking-wider text-neutral-500 ml-1">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="john@company.com"
            className="w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 font-body text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#058789]/20 focus:border-[#058789] transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-xs font-body font-semibold uppercase tracking-wider text-neutral-500 ml-1">Project Type</label>
        <div className="relative">
          <select
            id="type"
            required
            value={form.type}
            onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
            className="w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 font-body text-black appearance-none focus:outline-none focus:ring-2 focus:ring-[#058789]/20 focus:border-[#058789] transition-all cursor-pointer"
          >
            <option value="" disabled>Select a project type</option>
            {projectTypes.map(pt => (
              <option key={pt} value={pt}>{pt}</option>
            ))}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-body font-semibold uppercase tracking-wider text-neutral-500 ml-1">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Tell us about your project, timeline, and budget..."
          className="w-full bg-black/5 border border-black/10 rounded-2xl px-5 py-4 font-body text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#058789]/20 focus:border-[#058789] transition-all resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-black text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-neutral-800 transition-colors w-full disabled:opacity-70 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {loading ? 'Sending...' : 'Send Message'}
        {!loading && <ArrowUpRight size={14} weight="bold" />}
      </motion.button>
    </form>
  )
}

export default function Contact() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="Contact Us | Waltik Labs"
        description="Get in touch with Waltik Labs to discuss your next digital product, app, or AI project."
        canonicalUrl="https://waltiklabs.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Waltik Labs",
          "url": "https://waltiklabs.com/contact",
          "description": "Get in touch with Waltik Labs to discuss your next digital product, app, or AI project."
        }}
      />
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
                Taking on new projects for Q3 2026.
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
