import { motion } from 'framer-motion'
import {
  Code, Robot, PaintBrush, Cloud,
  ArrowUpRight,
  Check, CheckCircle,
  Package, ChartBar,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Footer from '../components/layout/Footer'
import { SectionLabel, Badge } from '../components/ui/GlassCard'
import { Reveal } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'

const heroFeatureCards = [
  { icon: Code, title: 'Software Engineering', subtitle: 'Custom digital products' },
  { icon: PaintBrush, title: 'UI/UX Design', subtitle: 'World-class interfaces' },
  { icon: Cloud, title: 'Cloud & DevOps', subtitle: 'Scalable deployments' },
]

const services = [
  {
    icon: Code,
    title: 'Software Engineering',
    description:
      'We build robust, scalable, and maintainable software. Whether it\'s a web app, mobile product, or a complex backend system — we architect solutions that grow with your business.',
    features: ['Custom web & mobile apps', 'API design & integration', 'Performance optimization', 'Code audits & legacy modernization'],
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL'],
  },
  {
    icon: PaintBrush,
    title: 'UI/UX Design',
    description:
      'Great products start with great design. We craft user experiences that are intuitive, beautiful, and grounded in real user research — from wireframes to pixel-perfect UI.',
    features: ['User research & journey mapping', 'Wireframing & prototyping', 'Design system creation', 'Accessibility-first UI'],
    tags: ['Figma', 'FigJam', 'Design Systems', 'Prototyping', 'UX Research'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'We build, migrate, and manage cloud infrastructure that\'s secure, reliable, and built for scale. From containerization to full CI/CD pipelines.',
    features: ['Cloud architecture design', 'Container orchestration', 'CI/CD pipeline setup', 'Monitoring & alerting'],
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: Robot,
    title: 'AI & Machine Learning',
    description:
      'We integrate cutting-edge AI into your products — from LLM-powered features and intelligent automation, to custom ML models built for your specific domain.',
    features: ['LLM integration & RAG systems', 'Custom ML model training', 'AI product strategy', 'Intelligent automation'],
    tags: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Computer Vision'],
  },
]

const process = [
  { step: '01', icon: ChartBar, title: 'Discovery', description: 'We deep-dive into your business goals, users, and technical constraints.' },
  { step: '02', icon: PaintBrush, title: 'Design', description: 'We prototype and validate the experience before a single line of code is written.' },
  { step: '03', icon: Code, title: 'Development', description: 'We build iteratively with continuous feedback loops and transparent communication.' },
  { step: '04', icon: Package, title: 'Deployment', description: 'We launch, monitor, and optimise post-go-live — we\'re in it for the long run.' },
]

const techStack = [
  'React', 'Next.js', 'Vue', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Docker', 'Kubernetes',
  'Terraform', 'GitHub Actions', 'Figma', 'OpenAI', 'LangChain', 'Stripe',
]

/* ── Alternating service layout ──────────────────────────────────── */
function ServiceRow({ service, idx }: { service: typeof services[0]; idx: number }) {
  const isEven = idx % 2 === 0
  return (
    <Reveal delay={0.05} direction="up">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start py-16 border-b border-black/6 last:border-0`}>
        {/* Text side */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 flex items-center justify-center">
              <service.icon size={24} weight="fill" className="text-black" />
            </div>
            <span className="text-xs font-body font-medium uppercase tracking-widest text-neutral-400">
              Service 0{idx + 1}
            </span>
          </div>
          <h3 className="font-heading font-bold text-3xl sm:text-4xl text-black mb-4">{service.title}</h3>
          <p className="text-neutral-500 font-body text-base leading-relaxed mb-6">{service.description}</p>
          <ul className="flex flex-col gap-2.5 mb-7">
            {service.features.map(f => (
              <li key={f} className="flex items-center gap-2.5 text-sm font-body text-neutral-700">
                <CheckCircle size={16} weight="fill" className="text-black/30 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {service.tags.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </div>

        {/* Visual side */}
        <div className="flex-1 w-full">
          <div className="glass rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <service.icon size={26} weight="duotone" className="text-black" />
            </div>
            <div>
              <p className="font-heading font-semibold text-lg text-black mb-2">{service.title}</p>
              <p className="text-sm text-neutral-400 font-body">Delivered end-to-end.</p>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-body text-neutral-400">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <SEO 
        title="Our Services | Waltik Labs"
        description="Explore our expertise in Software Engineering, UI/UX Design, Cloud & DevOps, and AI & Machine Learning."
        canonicalUrl="https://waltiklabs.com/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Software Engineering"
            },
            {
              "@type": "Service",
              "name": "UI/UX Design"
            },
            {
              "@type": "Service",
              "name": "Cloud & DevOps"
            },
            {
              "@type": "Service",
              "name": "AI & Machine Learning"
            }
          ]
        }}
      />
      <Hero
        word="SERVICES"
        headline="Our Expertise"
        subtext="From concept to deployment, we build solutions that solve real-world problems."
        featureCards={heroFeatureCards}
        floatingCardTitle="Discuss Your Project"
        floatingCardCopy="Let's explore how we can help you build, scale, and innovate."
        floatingCardCta="Get in Touch"
        floatingCardHref="/contact"
      />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <Reveal className="text-center mb-4">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">
            Built to Solve<br className="hidden sm:block" /> Real Problems
          </h2>
        </Reveal>

        <div>
          {services.map((s, i) => <ServiceRow key={s.title} service={s} idx={i} />)}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white border-t border-b border-black/6 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <SectionLabel>Technology Stack</SectionLabel>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-black mt-4">Our Toolkit</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 bg-black/4 border border-black/6 rounded-full text-sm font-body font-medium text-neutral-600 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <Reveal className="text-center mb-14">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-black mt-4">Our Delivery Process</h2>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div className="absolute top-11 left-[12.5%] right-[12.5%] h-px bg-black/10 z-0" />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1} direction="up">
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center">
                  <span className="font-heading font-bold text-black text-xl">0{i+1}</span>
                </div>
                <span className="text-xs font-body font-medium text-neutral-400 uppercase tracking-widest">{p.step}</span>
                <h4 className="font-heading font-bold text-lg text-black">{p.title}</h4>
                <p className="text-sm font-body text-neutral-500 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-4 pb-12 relative">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="mobile-sticky-stack"
              style={{
                "--mobile-top": `calc(7rem + ${i * 14}px)`,
                "--mobile-mt": i === 0 ? '0' : '2.5rem',
                "--mobile-z": i + 10,
              } as React.CSSProperties}
            >
              <Reveal 
                delay={i * 0.08}
                className="w-full h-full"
              >
                <div className="flex gap-5 bg-white border border-black/5 card-shadow rounded-2xl p-5 relative overflow-hidden h-full">
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-50 opacity-40 md:hidden" />
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 relative z-10">
                    <Check size={20} weight="bold" className="text-[#058789]" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-xs font-body text-neutral-400 uppercase tracking-widest">{p.step}</span>
                    <h4 className="font-heading font-bold text-base text-black mt-0.5">{p.title}</h4>
                    <p className="text-sm font-body text-neutral-500 leading-relaxed mt-1">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight mb-6">Let's Create</h2>
            <p className="text-neutral-400 font-body text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Have a project in mind? We'd love to hear about it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-heading font-semibold text-sm px-8 py-4 rounded-2xl hover:bg-neutral-100 transition-colors"
            >
              Start a Conversation
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
