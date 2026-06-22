import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
export interface FeatureCard {
  icon: React.ElementType
  title: string
  subtitle: string
}

export interface HeroProps {
  word: string
  headline: string
  subtext: string
  featureCards?: FeatureCard[]
  floatingCardTitle: string
  floatingCardCopy: string
  floatingCardCta: string
  floatingCardHref: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
} as any

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
} as any

export default function Hero({
  word,
  headline,
  subtext,
  featureCards = [],
  floatingCardTitle,
  floatingCardCopy,
  floatingCardCta,
  floatingCardHref,
}: HeroProps) {
  return (
    <section className="px-3 sm:px-4 pt-3 pb-6 min-h-screen flex flex-col">
      {/* Hero card */}
      <div
        className="relative flex-1 bg-white rounded-[32px] border border-black/5 flex flex-col overflow-hidden"
        style={{ minHeight: '88vh', boxShadow: 'var(--shadow-hero)' } as React.CSSProperties}
      >
        <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-50" />
          
          {/* Teal gradient blob top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #058789 0%, transparent 70%)' }}
          />
        </div>

        <div
          className="relative flex-1 flex flex-col overflow-hidden"
          style={{ borderRadius: '32px' }}
        >

          {/* Navbar inside hero */}
          <div className="relative z-20 px-5 sm:px-8 pt-5 sm:pt-6">
            <Navbar inside />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col px-5 sm:px-8 md:px-10 pb-7 sm:pb-9 pt-16 sm:pt-0">
            {/* Label */}
            <motion.div
              className="relative z-10 mt-8 sm:mt-10 md:mt-10 mb-8 sm:mb-0 pointer-events-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <span className="flex items-center justify-start gap-3 text-[11px] sm:text-xs font-body font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase text-black/60">
                <span className="w-4 sm:w-6 h-px bg-[#058789] inline-block opacity-60" />
                <span className="text-left">{headline}</span>
              </span>
            </motion.div>

            {/* Giant 3D word (Background Depth Effect on desktop, normal flow on mobile) */}
            <div
              className="relative md:absolute md:inset-0 flex-1 md:flex-none flex items-center justify-center overflow-hidden md:overflow-visible z-0 pointer-events-none w-full h-full py-8 md:py-0"
              style={{ perspective: '800px' }}
            >
              <h1
                className="hero-word"
                aria-label={word}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </h1>
            </div>

            {/* Bottom row */}
            <div className="relative z-10 mt-auto flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8 pt-4 pointer-events-auto">
              {/* Left */}
              <div className="flex-1 flex flex-col gap-3">
                <motion.div
                  className="glass rounded-3xl p-5 shadow-lg shadow-black/5 max-w-sm"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-sm sm:text-base font-body font-medium text-black leading-relaxed">
                    {subtext}
                  </p>
                </motion.div>

                {/* Feature cards */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                >
                  {featureCards && featureCards.length > 0 && featureCards.map((card) => (
                    <motion.div
                      key={card.title}
                      variants={fadeUp}
                      className="glass rounded-2xl px-4 py-3.5 flex items-center gap-3 flex-1 cursor-default shadow-lg shadow-black/5"
                      whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
                    >
                      <span className="flex items-center justify-center shrink-0">
                        <card.icon size={22} weight="fill" className="text-[#058789]" />
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
