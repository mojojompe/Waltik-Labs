import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-black border border-black/10 hover:bg-neutral-50 shadow-sm hover:shadow-md',
    glass:
      'glass text-black hover:bg-white/70 shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-black hover:bg-black/5',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 rounded-xl',
    md: 'text-sm px-5 py-2.5 rounded-xl',
    lg: 'text-base px-7 py-3.5 rounded-2xl',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  const inner = (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className="inline-block bg-transparent border-0 p-0">
      {inner}
    </button>
  )
}

/* ── Scroll-reveal wrapper ────────────────────────────────────────── */
interface RevealProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function Reveal({ children, className, style, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
    x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
