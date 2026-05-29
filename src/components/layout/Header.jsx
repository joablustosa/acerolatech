import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, navLinks } from '../../content/site'
import Button from '../ui/Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? 'text-ms-blue font-semibold' : 'text-ms-subtle hover:text-ms-ink'
    }`

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ms-border bg-ms-surface/95 backdrop-blur-md">
      <div className="site-container py-3">
        <div className="site-header-bar">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/assets/logo.png"
              alt="Acerola Tech"
              className="h-9 w-9 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[0.9375rem] font-semibold text-ms-ink">{brand.name}</span>
              <span className="hidden text-[0.6875rem] text-ms-muted sm:block">{brand.tagline}</span>
            </span>
          </Link>

          <nav className="site-header-nav" aria-label="Principal">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <Button variant="primary" whatsapp className="!py-2 !px-5 !text-sm">
                Solicitar proposta
              </Button>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-ms-ink hover:bg-ms-tint lg:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ms-border bg-ms-surface lg:hidden" aria-label="Menu mobile">
          <div className="site-container py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-base ${
                      isActive ? 'bg-ms-tint font-semibold text-ms-blue' : 'text-ms-subtle'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 border-t border-ms-border pt-3">
                <Button variant="primary" whatsapp className="w-full justify-center">
                  Solicitar proposta
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
