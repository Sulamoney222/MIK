import { Link } from 'react-router-dom'
import { technicalSkills, certificates, diplomas } from '../data/siteData'
import { useUser } from '../context/UserContext'

function CourseList({ title, items, accent = 'red' }) {
  const accentClasses =
    accent === 'red'
      ? 'border-mik-red/30 bg-mik-red/5 dark:bg-mik-red/10'
      : 'border-gray-200 bg-mik-gray-light dark:border-slate-600 dark:bg-slate-800'

  return (
    <div className={`rounded-2xl border p-6 lg:p-8 ${accentClasses}`}>
      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-slate-300">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-mik-red text-xs font-bold text-white">
              +
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Courses() {
  const { isAuthenticated } = useUser()

  return (
    <section id="courses" className="bg-mik-gray-light py-16 dark:bg-slate-800/50 lg:py-24">
      <div className="section-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-mik-red">
              Courses & Programmes
            </span>
            <h2 className="section-heading mt-2">Build Your Digital Skills</h2>
            <p className="section-subheading">
              Technical skills, professional certificates, and diploma programmes — all under one
              roof.
            </p>
          </div>
          <Link
            to={isAuthenticated ? '/dashboard/courses' : '/get-started'}
            className="btn-primary shrink-0 self-start sm:self-auto"
          >
            {isAuthenticated ? 'Enroll in Dashboard' : 'Get Started'}
          </Link>
        </div>

        <div className="mt-12 space-y-8">
          <CourseList title="Technical Skills & Services" items={technicalSkills} />

          <div className="grid gap-8 lg:grid-cols-2">
            <CourseList title="Certificate Programmes" items={certificates} accent="light" />
            <CourseList title="Diploma Programmes" items={diplomas} accent="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
