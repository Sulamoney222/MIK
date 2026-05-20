import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { allCourses } from '../../data/siteData'

export default function OverviewPage() {
  const { user } = useUser()
  const enrolled = allCourses.filter((c) => user.enrolledCourses.includes(c.id))
  const firstName = user.fullName?.split(' ')[0] || 'Student'

  const stats = [
    { label: 'Enrolled Courses', value: enrolled.length, color: 'text-mik-red' },
    { label: 'Available Courses', value: allCourses.length, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Student ID', value: user.studentId, color: 'text-gray-900 dark:text-white', small: true },
  ]

  return (
    <div className="space-y-8">
      <div className="dash-card relative overflow-hidden bg-gradient-to-r from-mik-red to-mik-red-dark !border-0 !text-white">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative">
          <p className="text-sm font-medium text-white/80">Good to see you,</p>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{firstName} 👋</h2>
          <p className="mt-2 max-w-lg text-sm text-white/90">
            Continue building your ICT skills. Browse courses or check your enrolled programmes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/dashboard/courses"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-mik-red transition hover:bg-white/90"
            >
              Browse Courses
            </Link>
            <Link
              to="/dashboard/my-courses"
              className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              My Courses ({enrolled.length})
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="dash-card">
            <p className="text-sm text-gray-500 dark:text-slate-500">{stat.label}</p>
            <p
              className={`mt-1 font-display font-bold ${stat.small ? 'text-lg' : 'text-3xl'} ${stat.color}`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
            Recent Enrollments
          </h3>
          <Link to="/dashboard/my-courses" className="text-sm font-medium text-mik-red hover:underline">
            View all →
          </Link>
        </div>

        {enrolled.length === 0 ? (
          <div className="dash-card flex flex-col items-center py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mik-red/10 text-mik-red">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p className="mt-4 font-medium text-gray-900 dark:text-white">No courses yet</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-slate-500">
              Start by browsing our catalogue and enrolling in a programme.
            </p>
            <Link to="/dashboard/courses" className="btn-primary mt-6">
              Find a Course
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enrolled.slice(0, 3).map((course) => (
              <div key={course.id} className="dash-card">
                <span className="text-xs font-semibold uppercase text-mik-red">{course.category}</span>
                <h4 className="mt-2 font-display font-bold text-gray-900 dark:text-white">
                  {course.title}
                </h4>
                <p className="mt-1 text-xs text-gray-500 dark:text-slate-500">{course.duration}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-700">
                  <div className="h-full w-1/3 rounded-full bg-mik-red" />
                </div>
                <p className="mt-2 text-xs text-gray-500">Registration confirmed</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
