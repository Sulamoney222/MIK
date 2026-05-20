import { useUser } from '../../context/UserContext'

const categoryColors = {
  Technical: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Certificate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Diploma: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
}

export default function CourseCard({ course, showActions = true }) {
  const { isEnrolled, enrollCourse, unenrollCourse } = useUser()
  const enrolled = isEnrolled(course.id)

  return (
    <article className="dash-card group flex flex-col transition hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryColors[course.category] || 'bg-gray-100 text-gray-700'}`}
        >
          {course.category}
        </span>
        <span className="text-xs text-gray-500 dark:text-slate-500">{course.duration}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
        {course.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-slate-500">
        <span className="rounded-md bg-gray-100 px-2 py-1 dark:bg-slate-700">
          {course.level}
        </span>
        {enrolled && (
          <span className="rounded-md bg-green-100 px-2 py-1 font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
            Enrolled
          </span>
        )}
      </div>

      {showActions && (
        <div className="mt-5 border-t border-gray-100 pt-4 dark:border-slate-700">
          {enrolled ? (
            <button
              type="button"
              onClick={() => unenrollCourse(course.id)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-mik-red dark:border-slate-600 dark:text-slate-300 dark:hover:border-red-800 dark:hover:bg-red-900/20"
            >
              Remove from My Courses
            </button>
          ) : (
            <button
              type="button"
              onClick={() => enrollCourse(course.id)}
              className="w-full rounded-xl bg-mik-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-mik-red-dark"
            >
              Enroll in Course
            </button>
          )}
        </div>
      )}
    </article>
  )
}
