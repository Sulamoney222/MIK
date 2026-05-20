import { Link } from 'react-router-dom'
import CourseCard from '../../components/dashboard/CourseCard'
import { useUser } from '../../context/UserContext'
import { allCourses } from '../../data/siteData'

export default function MyCoursesPage() {
  const { user } = useUser()
  const enrolled = allCourses.filter((c) => user.enrolledCourses.includes(c.id))

  if (enrolled.length === 0) {
    return (
      <div className="dash-card flex flex-col items-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-mik-red/10">
          <svg className="h-10 w-10 text-mik-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-gray-900 dark:text-white">
          You haven&apos;t enrolled yet
        </h3>
        <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-slate-500">
          Browse our catalogue and select the courses that match your career goals.
        </p>
        <Link to="/dashboard/courses" className="btn-primary mt-8">
          Browse Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="dash-card flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-slate-500">Total enrolled</p>
          <p className="font-display text-3xl font-bold text-mik-red">{enrolled.length}</p>
        </div>
        <div className="text-right text-sm text-gray-500 dark:text-slate-500">
          <p>Status: Active</p>
          <p className="mt-1 text-green-600 dark:text-green-400">Registration in progress</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {enrolled.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
