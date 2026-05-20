import { useState } from 'react'
import { useUser } from '../../context/UserContext'

export default function ProfilePage() {
  const { user, updateProfile } = useUser()
  const [form, setForm] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    bio: user.bio || '',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setSaved(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const initials = form.fullName
    ? form.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'S'

  const joined = user.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString('en-NG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—'

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="dash-card flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-mik-red to-mik-red-dark text-3xl font-bold text-white shadow-lg">
          {initials}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
            {form.fullName || 'Student'}
          </h2>
          <p className="mt-1 text-sm text-mik-red font-medium">{user.studentId}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-slate-500">{form.email}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:justify-start">
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-500">Member since</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{joined}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-500">Enrolled courses</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user.enrolledCourses.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="dash-card space-y-5">
        <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
          Edit Profile
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="dash-label">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              className="dash-input mt-1.5"
            />
          </div>
          <div>
            <label htmlFor="email" className="dash-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="dash-input mt-1.5"
            />
          </div>
          <div>
            <label htmlFor="phone" className="dash-label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="dash-input mt-1.5"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="bio" className="dash-label">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              value={form.bio}
              onChange={handleChange}
              className="dash-input mt-1.5 resize-none"
              placeholder="Tell us about your learning goals..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
          {saved && (
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              ✓ Profile saved
            </span>
          )}
        </div>
      </form>

      <div className="dash-card">
        <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
          Account Info
        </h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between border-b border-gray-100 py-2 dark:border-slate-700">
            <dt className="text-gray-500">Student ID</dt>
            <dd className="font-medium text-gray-900 dark:text-white">{user.studentId}</dd>
          </div>
          <div className="flex justify-between border-b border-gray-100 py-2 dark:border-slate-700">
            <dt className="text-gray-500">Institute</dt>
            <dd className="font-medium text-gray-900 dark:text-white">MIK InforTech</dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-gray-500">Programme</dt>
            <dd className="font-medium text-gray-900 dark:text-white">DOUBLECLICK</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
