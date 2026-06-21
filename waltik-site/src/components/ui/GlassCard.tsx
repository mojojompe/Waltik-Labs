import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-[20px] p-5 relative overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.10)' } : undefined}
    >
      {children}
    </motion.div>
  )
}

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase text-neutral-500',
        className
      )}
    >
      <span className="w-4 h-px bg-neutral-400 inline-block" />
      {children}
      <span className="w-4 h-px bg-neutral-400 inline-block" />
    </span>
  )
}

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-xs font-body font-medium text-neutral-600 border border-black/6',
        className
      )}
    >
      {children}
    </span>
  )
}
