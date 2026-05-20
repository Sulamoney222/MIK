import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'
import { useUser } from '../context/UserContext'

export default function GetStartedPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useUser()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard', { replace: true })
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.fullName.trim() || !form.email.trim()) {
      setError('Please enter your full name and email.')
      return
    }
    login(form)
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white via-mik-gray-light to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="hidden w-1/2 flex-col justify-between bg-mik-red p-12 text-white lg:flex">
        <Link to="/">
          <Logo size="lg" className="[&_span]:text-white [&_p]:text-white/70" />
        </Link>
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight">
            Start Your ICT Journey Today
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Create your student account, browse courses, and manage your learning from one
            dashboard.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Browse 20+ courses & programmes',
              'Enroll with one click',
              'Track your profile & progress',
              'Dark mode for comfortable learning',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/60">
          MIK InforTech — Computer Training Institute & ICT Consultancy
        </p>
      </div>

      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <Link to="/" className="mb-8 inline-block lg:hidden">
            <Logo size="md" />
          </Link>

          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
            Fill in your details to access the student dashboard. No password needed for now.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="fullName" className="dash-label">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                className="dash-input mt-1.5"
                placeholder="e.g. Amina Hassan"
              />
            </div>
            <div>
              <label htmlFor="email" className="dash-label">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="dash-input mt-1.5"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="dash-label">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="dash-input mt-1.5"
                placeholder="07064313294"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-mik-red dark:bg-red-900/30 dark:text-red-300">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full">
              Get Started →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-slate-500">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => {
                const saved = localStorage.getItem('mik-user')
                if (saved) {
                  login(JSON.parse(saved))
                  navigate('/dashboard')
                } else {
                  setError('No saved account found. Please sign up above.')
                }
              }}
              className="font-semibold text-mik-red hover:underline"
            >
              Continue to dashboard
            </button>
          </p>

          <Link
            to="/"
            className="mt-4 block text-center text-sm text-gray-500 hover:text-mik-red dark:text-slate-500"
          >
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}
