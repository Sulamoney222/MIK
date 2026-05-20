import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import { useUser } from '../../context/UserContext'

const links = [
  {
    to: '/dashboard',
    end: true,
    label: 'Overview',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    to: '/dashboard/courses',
    label: 'Browse Courses',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    to: '/dashboard/my-courses',
    label: 'My Courses',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    ),
  },
  {
    to: '/dashboard/profile',
    label: 'Profile',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
]

export default function DashboardSidebar({ open, onClose }) {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const initials = user.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?'

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? 'bg-mik-red text-white shadow-lg shadow-mik-red/30'
        : 'text-gray-600 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800'
    }`

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 dark:border-slate-700 dark:bg-slate-900 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center border-b border-gray-100 px-6 dark:border-slate-800">
          <Logo size="sm" />
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={navClass}
              onClick={onClose}
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {link.icon}
              </svg>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-100 p-4 dark:border-slate-800">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mik-red text-sm font-bold text-white">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                {user.fullName || 'Student'}
              </p>
              <p className="truncate text-xs text-gray-500 dark:text-slate-500">
                {user.studentId}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-3 w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-mik-red dark:text-slate-400 dark:hover:bg-red-900/20"
          >
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
