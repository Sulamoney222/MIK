import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import { useUser } from '../../context/UserContext'

export default function DashboardHeader({ title, subtitle, onMenuClick }) {
  const { user } = useUser()

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 lg:hidden dark:border-slate-600 dark:text-slate-300"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div>
            <h1 className="font-display text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {title}
            </h1>
            {subtitle && (
              <p className="hidden text-sm text-gray-500 dark:text-slate-500 sm:block">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-mik-red sm:inline dark:text-slate-400"
          >
            Website
          </Link>
          <ThemeToggle />
          <div className="hidden items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 sm:flex dark:border-slate-600">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mik-red text-xs font-bold text-white">
              {user.fullName?.[0]?.toUpperCase() || 'S'}
            </div>
            <span className="max-w-[120px] truncate text-sm font-medium text-gray-900 dark:text-white">
              {user.fullName?.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
