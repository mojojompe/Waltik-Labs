import { Link } from 'react-router-dom'
import { ArrowUpRight, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Software Engineering', href: '/services#software' },
    { label: 'AI Solutions', href: '/services#ai' },
    { label: 'Product Design', href: '/services#design' },
    { label: 'Cloud Infrastructure', href: '/services#cloud' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
  ],
}

const socials = [
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: GithubLogo, href: 'https://github.com/Waltik-Technologies', label: 'GitHub' },
  { icon: InstagramLogo, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Giant WALTIK wordmark */}
      <div className="relative border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex flex-col gap-4 md:max-w-xs">
              <div className="flex items-center gap-3">
                <img src="/waltik_nobg.png" alt="Waltik Labs" className="h-10 w-auto" />
                <span className="font-heading font-bold text-lg">Waltik Labs</span>
              </div>
              <p className="text-sm text-white/50 font-body leading-relaxed">
                Engineering the future of digital experiences. Software, AI & Product Design.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-white border border-white/20 px-4 py-2.5 rounded-xl hover:bg-white hover:text-black transition-all duration-200 w-fit"
              >
                Start a Project
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>

            {/* Links */}
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <h4 className="text-xs font-body font-medium text-white/40 uppercase tracking-widest mb-4">
                    {group}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {links.map(link => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-sm font-body text-white/60 hover:text-[#058789] hover:-translate-y-0.5 inline-block transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant WALTIK */}
      <div className="relative overflow-hidden select-none">
        <div
          className="font-display text-white/5 leading-none text-right pr-4"
          style={{ fontSize: 'clamp(8rem, 22vw, 28rem)', letterSpacing: '-0.03em' }}
          aria-hidden="true"
        >
          WALTIK
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-body text-white/30">
          © {new Date().getFullYear()} Waltik Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-[#058789] hover:border-[#058789]/40 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(5,135,137,0.2)] transition-all duration-300"
            >
              <Icon size={15} weight="fill" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
