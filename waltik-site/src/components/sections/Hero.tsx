import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { cn } from '../../lib/utils'

export interface FeatureCard {
  icon: React.ElementType
  title: string
  subtitle: string
}

export interface HeroProps {
  word: string
  headline: string
  subtext: string
  featureCards: FeatureCard[]
  floatingCardTitle: string
  floatingCardCopy: string
  floatingCardCta: string
  floatingCardHref: string
}

/* ── 3D tilt wrapper ─────────────────────────────────────────────── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

/* ── Animated background ─────────────────────────────────────────── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Teal gradient blob top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #058789 0%, transparent 70%)' }}
      />

      {/* Floating geo circles */}
      {[
        { size: 260, top: '12%', left: '58%', delay: 0, opacity: 0.04, border: '#058789' },
        { size: 160, top: '62%', left: '18%', delay: 1.8, opacity: 0.03, border: '#000' },
        { size: 100, top: '22%', left: '82%', delay: 3.2, opacity: 0.05, border: '#058789' },
        { size: 70, top: '78%', left: '70%', delay: 2.4, opacity: 0.06, border: '#000' },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ width: s.size, height: s.size, top: s.top, left: s.left, opacity: s.opacity, borderColor: s.border }}
          animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7 + i * 1.6, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Grid cross lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" aria-hidden>
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  )
}

/* ── Letter animation variants ───────────────────────────────────── */
const letterVariant = {
  hidden: { opacity: 0, y: -200, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      type: "spring",
      bounce: 0.45,
      duration: 2.0,
      delay: 0.1 + i * 0.15,
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
}

export default function Hero({
  word,
  headline,
  subtext,
  featureCards,
  floatingCardTitle,
  floatingCardCopy,
  floatingCardCta,
  floatingCardHref,
}: HeroProps) {
  const letters = word.split('')

  return (
    <section className="px-3 sm:px-4 pt-3 pb-6 min-h-screen flex flex-col">
      {/* Hero card */}
      <div
        className="relative flex-1 bg-white rounded-[32px] border border-black/5 flex flex-col overflow-hidden"
        style={{ minHeight: '88vh', boxShadow: 'var(--shadow-hero)' } as React.CSSProperties}
      >
        <div
          className="relative flex-1 flex flex-col overflow-hidden"
          style={{ borderRadius: '32px' }}
        >
          <HeroBackground />

          {/* Navbar inside hero */}
          <div className="relative z-20 px-5 sm:px-8 pt-5 sm:pt-6">
            <Navbar inside />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col px-5 sm:px-8 md:px-10 pb-7 sm:pb-9 pt-16 sm:pt-0">
            {/* Label */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <span className="flex items-center justify-center sm:justify-start gap-2 text-xs font-body font-medium tracking-[0.22em] uppercase text-neutral-400">
                <span className="w-6 h-px bg-[#058789] inline-block opacity-60 hidden sm:block" />
                <span className="text-center sm:text-left">{headline}</span>
              </span>
            </motion.div>

            {/* Giant 3D word */}
            <div className="mt-1 sm:mt-2 flex-1 flex items-start overflow-hidden w-full" style={{ perspective: '800px' }}>
              <h1
                className="hero-word"
                aria-label={word}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariant}
                    initial="hidden"
                    animate="show"
                    className="inline-block"
                    style={{ 
                      transformStyle: 'preserve-3d', 
                      display: 'inline-block',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Bottom row */}
            <div className="mt-auto flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8 pt-4">
              {/* Left */}
              <div className="flex-1 flex flex-col gap-5">
                <motion.p
                  className="text-sm sm:text-base font-body text-neutral-500 leading-relaxed max-w-sm"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {subtext}
                </motion.p>

                {/* Feature cards */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                >
                  {featureCards.map((card) => (
                    <motion.div
                      key={card.title}
                      variants={fadeUp}
                      className="glass rounded-2xl px-4 py-3.5 flex items-center gap-3 flex-1 cursor-default shadow-sm shadow-black/4"
                      whileHover={{ y: -3, boxShadow: '0 16px 48px rgba(0,0,0,0.09), 0 0 0 1px rgba(5,135,137,0.15)' }}
                    >
                      <span className="w-9 h-9 bg-[#058789]/10 rounded-xl flex items-center justify-center shrink-0">
                        <card.icon size={18} weight="fill" className="text-[#058789]" />
                      </span>
                      <div>
                        <p className="text-xs font-heading font-semibold text-black leading-tight">{card.title}</p>
                        <p className="text-[11px] font-body text-neutral-400 leading-tight mt-0.5">{card.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right: CTA card */}
              <motion.div
                className="glass rounded-2xl p-5 sm:p-6 w-full lg:w-[260px] shrink-0 shadow-lg shadow-black/5"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
              >
                <p className="text-[11px] font-body font-medium text-[#058789] uppercase tracking-widest mb-2">
                  {floatingCardTitle}
                </p>
                <p className="text-sm font-heading font-semibold text-black leading-snug mb-4">
                  {floatingCardCopy}
                </p>
                <Link
                  to={floatingCardHref}
                  className="inline-flex items-center gap-1.5 bg-[#058789] text-white text-xs font-heading font-semibold px-4 py-2.5 rounded-xl hover:bg-[#046f70] transition-colors duration-200"
                >
                  {floatingCardCta}
                  <ArrowUpRight size={12} weight="bold" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
