import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { GoArrowUpRight } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom'
import './CardNav.css'

export interface CardNavLink {
  label: string
  href: string
  ariaLabel?: string
}

export interface CardNavItem {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

interface CardNavProps {
  logo: string
  logoAlt?: string
  logoText?: string
  items: CardNavItem[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
  buttonBgColor?: string
  buttonTextColor?: string
  ctaLabel?: string
  ctaHref?: string
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  logoText,
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  ctaLabel = 'Start a Project',
  ctaHref = '/contact',
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  
  const location = useLocation()
  
  const getActivePageName = () => {
    const path = location.pathname
    if (path === '/') return 'Home'
    if (path.startsWith('/services')) return 'Services'
    if (path.startsWith('/work')) return 'Work'
    if (path.startsWith('/about')) return 'About'
    if (path.startsWith('/contact')) return 'Contact'
    if (path.startsWith('/legal')) return 'Legal'
    return ''
  }

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 280

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      // Just return a safe, generous height to prevent cutoff on mobile
      // since the content relies on flex layout.
      return 460
    }
    return 248
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: 60, overflow: 'hidden' })
    gsap.set(cardsRef.current, { y: 50, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease })
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1')

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl
    return () => { tl?.kill(); tlRef.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return
      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) { newTl.progress(1); tlRef.current = newTl }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) tlRef.current = newTl
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el
  }

  return (
    <>
      {/* Dark blur backdrop for mobile overlap */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 z-40 lg:hidden ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu} 
        aria-hidden="true"
      />
      
      <div className={`card-nav-container ${className} !z-50`}>
        <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
          <div className="card-nav-top relative">
          {/* Hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt={logoAlt} className="logo" />
            {logoText && <span className="logo-text">{logoText}</span>}
          </div>

          {/* Active Page Label (Mobile Only) */}
          <div className="active-page-label" style={{ color: menuColor || '#000' }}>
            {getActivePageName()}
          </div>

          {/* CTA */}
          <Link to={ctaHref} className="card-nav-cta-button">
            {ctaLabel}
            <GoArrowUpRight style={{ fontSize: 14 }} />
          </Link>
        </div>

        {/* Cards */}
        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    to={lnk.href}
                    aria-label={lnk.ariaLabel}
                    style={{ color: item.textColor }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
      </div>
    </>
  )
}

export default CardNav
