import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const customLetters = [
  { 
    char: 'W', 
    path: "M 0 0 H 50 L 70 100 L 90 0 H 140 L 160 100 L 180 0 H 230 L 185 200 H 135 L 115 100 L 95 200 H 45 Z", 
    width: 230 
  },
  { 
    char: 'A', 
    path: "M 0 200 V 40 L 40 0 H 110 L 150 40 V 200 H 100 V 120 H 50 V 200 Z M 50 50 H 100 V 80 H 50 Z", 
    width: 150 
  },
  { 
    char: 'L', 
    path: "M 20 0 H 50 V 150 H 150 V 200 H 0 V 20 Z", 
    width: 150 
  },
  { 
    char: 'T', 
    path: "M 0 0 H 150 V 50 H 100 V 180 L 80 200 H 50 V 50 H 0 Z", 
    width: 150 
  },
  { 
    char: 'I', 
    path: "M 0 0 H 30 L 50 20 V 200 H 20 L 0 180 Z", 
    width: 50 
  },
  { 
    char: 'K', 
    path: "M 0 0 H 50 V 80 L 120 0 H 170 L 100 100 L 170 200 H 120 L 50 110 V 200 H 0 Z", 
    width: 170 
  },
]

const letterVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -30, z: -40 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0, z: 0,
    transition: {
      duration: 0.4,
      delay: 0.1 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
} as any

export default function CustomTypography({ className }: { className?: string }) {
  return (
    <div 
      className={cn("flex justify-between items-center w-full", className)}
      style={{ perspective: '800px' }}
      aria-label="WALTIK"
    >
      {customLetters.map((letter, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={letterVariant}
          initial="hidden"
          animate="show"
          style={{ transformStyle: 'preserve-3d' }}
          className="inline-block transform-gpu"
          whileHover={{
            color: '#058789',
            rotateY: 8,
            scale: 1.05,
            transition: { duration: 0.25 },
          }}
        >
          <svg
            viewBox={`0 0 ${letter.width} 200`}
            className="h-auto"
            style={{ 
              width: '100%', 
              maxWidth: `${letter.width * 0.85}px`, // maintain relative sizing
              fill: 'currentColor',
            }}
          >
            <path d={letter.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
