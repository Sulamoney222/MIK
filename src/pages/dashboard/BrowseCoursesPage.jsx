import { useMemo, useState } from 'react'
import CourseCard from '../../components/dashboard/CourseCard'
import { allCourses, courseCategories } from '../../data/siteData'

export default function BrowseCoursesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return allCourses.filter((c) => {
      const matchCat = category === 'All' || c.category === category
      const matchSearch =
        !search.trim() ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dash-input pl-10"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-500">
          {filtered.length} course{filtered.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {courseCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              category === cat
                ? 'bg-mik-red text-white shadow-lg shadow-mik-red/25'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-mik-red/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="dash-card py-16 text-center">
          <p className="font-medium text-gray-900 dark:text-white">No courses match your search</p>
          <p className="mt-1 text-sm text-gray-500">Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}
