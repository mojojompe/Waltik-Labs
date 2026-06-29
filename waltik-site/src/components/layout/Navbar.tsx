import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  House, Wrench, FolderOpen, UsersThree, ChatCircle, ArrowUpRight, TrendUp
} from '@phosphor-icons/react'
import { cn } from '../../lib/utils'
import CardNav from './CardNav'

const navLinks = [
  { 
    label: 'Home', href: '/', icon: House,
    subItems: [
      { label: 'Features', href: '/#features' },
      { label: 'Featured Work', href: '/#work' },
      { label: 'Testimonials', href: '/#testimonials' },
    ]
  },
  { 
    label: 'Services', href: '/services', icon: Wrench,
    subItems: [
      { label: 'Software Engineering', href: '/services#software' },
      { label: 'AI Solutions', href: '/services#ai' },
      { label: 'Product Design', href: '/services#design' },
      { label: 'Cloud Infrastructure', href: '/services#cloud' },
    ]
  },
  { 
    label: 'Work', href: '/work', icon: FolderOpen,
    subItems: [
      { label: 'iléSure', href: '/work' },
      { label: 'Safe Route Ai', href: '/work' },
      { label: 'Outbreak IQ', href: '/work' },
      { label: 'MediCare', href: '/work' },
    ]
  },
  { 
    label: 'About', href: '/about', icon: UsersThree,
    subItems: [
      { label: 'Our Mission', href: '/about#mission' },
      { label: 'Leadership Team', href: '/about#team' },
      { label: 'Careers', href: '/about#careers' },
    ]
  },
  { 
    label: 'Contact', href: '/contact', icon: ChatCircle,
    subItems: [
      { label: 'Start a Project', href: '/contact#form' },
      { label: 'Office Locations', href: '/contact#offices' },
    ]
  },
  { 
    label: 'Investors', href: '/investors', icon: TrendUp,
    subItems: [
      { label: 'The Opportunity', href: '/investors#opportunity' },
      { label: 'Traction', href: '/investors#traction' },
      { label: 'Pitch to Us', href: '/investors#contact' },
    ]
  },
]

/* CardNav items for mobile */
const cardNavItems = [
  {
    label: 'Pages',
    bgColor: '#0a0a0a',
    textColor: '#fff',
    links: [
      { label: 'Home', href: '/', ariaLabel: 'Go to Home' },
      { label: 'Services', href: '/services', ariaLabel: 'Our Services' },
      { label: 'Work', href: '/work', ariaLabel: 'Our Work' },
    ],
  },
  {
    label: 'Company',
    bgColor: '#058789',
    textColor: '#fff',
    links: [
      { label: 'About', href: '/about', ariaLabel: 'About Waltik Labs' },
      { label: 'Team', href: '/about', ariaLabel: 'Meet the Team' },
    ],
  },
  {
    label: 'Connect',
    bgColor: '#1a1a1a',
    textColor: '#fff',
    links: [
      { label: 'Project', href: '/contact', ariaLabel: 'Start a Project' },
      { label: 'Quote', href: '/contact', ariaLabel: 'Get a Quote' },
      { label: 'Talk', href: '/contact', ariaLabel: 'Say Hello' },
    ],
  },
  {
    label: 'Investors',
    bgColor: '#e5e7eb',
    textColor: '#000',
    links: [
      { label: 'Overview', href: '/investors', ariaLabel: 'Investors Overview' },
      { label: 'Pitch Deck', href: 'mailto:support.waltiklabs@gmail.com', ariaLabel: 'Request Pitch Deck' },
    ],
  },
]

interface NavbarProps {
  inside?: boolean
}

export default function Navbar({ inside = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [hoveredSub, setHoveredSub] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* ── Pill-in-Pill Desktop Links with Dropdown Modal ── */
  const DesktopLinks = (
    <nav className="flex items-center gap-1 bg-black/5 rounded-full p-1.5 border border-black/5">
      {navLinks.map(link => {
        const isActive = pathname === link.href
        return (
          <div 
            key={link.href} 
            className="relative"
            onMouseEnter={() => setHoveredNav(link.label)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <Link
              to={link.href}
              className={cn(
                'relative flex items-center gap-1.5 px-4 py-2.5 text-xs font-body font-medium rounded-full transition-all duration-200',
                isActive
                  ? 'text-white bg-black'
                  : 'text-neutral-600 hover:text-black hover:bg-white hover:shadow-sm'
              )}
            >
              {isActive && (
                <link.icon
                  size={14}
                  weight="fill"
                  className="text-white"
                />
              )}
              {link.label}
            </Link>

            {/* Dropdown Modal */}
            <AnimatePresence>
              {hoveredNav === link.label && link.subItems && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-black/5 rounded-[20px] p-2 shadow-xl shadow-black/10 z-50"
                >
                  <div className="flex flex-col gap-0.5">
                    {link.subItems.map((sub, i) => {
                      const isHovered = hoveredSub === sub.label
                      return (
                        <Link 
                          key={i} 
                          to={sub.href}
                          onMouseEnter={() => setHoveredSub(sub.label)}
                          onMouseLeave={() => setHoveredSub(null)}
                          className="relative px-3 py-2 text-[11px] font-body font-medium text-neutral-600 hover:text-black transition-colors rounded-xl z-10"
                        >
                          {isHovered && (
                            <motion.div
                              layoutId="dropdownHover"
                              className="absolute inset-0 bg-black/5 rounded-xl -z-10"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          {sub.label}
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </nav>
  )

  /* ── Desktop Nav — pill design (LINKS ONLY, GLOBALLY STICKY) ── */
  const DesktopNav = (
    <motion.header
      className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          'transition-all duration-300 rounded-full',
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-2xl shadow-black/10 border border-black/10'
            : 'bg-white/95 backdrop-blur-md shadow-xl shadow-black/5 border border-black/5'
        )}
      >
        {DesktopLinks}
      </div>
    </motion.header>
  )

  /* ── Inside-hero inline nav (LOGO and CTA ONLY) ── */
  const InlineNav = (
    <div className="hidden md:flex items-center justify-between w-full relative z-20">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
        <img src="/waltik_nobg.png" alt="Waltik Labs logo" className="h-7 w-auto" />
        <span className="font-heading font-bold text-xl text-black tracking-tight">
          Waltik Labs
        </span>
      </Link>

      {/* CTA */}
      <Link
        to="/contact"
        className="flex items-center gap-1.5 bg-black text-white text-xs font-heading font-semibold px-4 py-2.5 rounded-full hover:bg-[#058789] transition-all duration-200 shadow-md"
      >
        Start a Project
        <ArrowUpRight size={12} weight="bold" />
      </Link>
    </div>
  )

  return (
    <>
      {inside && InlineNav}
      {DesktopNav}
      {/* Mobile CardNav fixed */}
      <div className="block md:hidden">
        <CardNav
          logo="/waltik_nobg.png"
          logoAlt="Waltik Labs"
          logoText="Waltik Labs"
          items={cardNavItems}
          baseColor="#ffffff"
          menuColor="#000"
          ctaLabel="Start a Project"
          ctaHref="/contact"
          className=""
        />
      </div>
    </>
  )
}
