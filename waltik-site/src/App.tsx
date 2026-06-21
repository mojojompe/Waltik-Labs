import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

/* ── Page transition wrapper ─────────────────────────────────────── */
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Animated routes ─────────────────────────────────────────────── */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/legal/privacy" element={<PageTransition><Legal title="Privacy Policy" /></PageTransition>} />
        <Route path="/legal/terms" element={<PageTransition><Legal title="Terms of Service" /></PageTransition>} />

      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
