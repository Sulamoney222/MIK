import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/siteData'
import { useUser } from '../context/UserContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated } = useUser()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        <a href="#home" className="shrink-0">
          <Logo size="md" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-mik-red dark:text-slate-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-outline py-2.5">
            Contact Us
          </a>
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn-primary py-2.5">
              My Dashboard
            </Link>
          ) : (
            <Link to="/get-started" className="btn-primary py-2.5">
              Get Started
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
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
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-mik-gray-light hover:text-mik-red dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#contact" className="btn-outline w-full text-center" onClick={() => setOpen(false)}>
              Contact Us
            </a>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="btn-primary w-full text-center"
                onClick={() => setOpen(false)}
              >
                My Dashboard
              </Link>
            ) : (
              <Link
                to="/get-started"
                className="btn-primary w-full text-center"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
