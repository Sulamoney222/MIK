import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Hero() {
  const { isAuthenticated } = useUser()

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 dark:bg-slate-900 lg:pt-28">
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-mik-red/5 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-mik-red/10 blur-3xl" />

      <div className="section-container relative pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mik-red/20 bg-mik-red/5 px-4 py-1.5 dark:bg-mik-red/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mik-red opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mik-red" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-mik-red">
                Registration is in progress
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-mik-red">
              Solution to ICT and its Education
            </p>

            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Computer Training Institute &{' '}
              <span className="text-mik-red">Skills Acquisition</span> Programme
            </h1>

            <p className="mt-4 text-xl font-semibold text-gray-800 dark:text-slate-200 sm:text-2xl">
              Your Career Path With Us...
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-slate-400 sm:text-lg">
              Skill up now and stay relevant in the digital age. Whether you&apos;re a beginner
              or a professional, there&apos;s always more to learn about ICT — and share it with
              others.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <Link to="/get-started" className="btn-primary">
                  Get Started
                </Link>
              )}
              <a href="#courses" className="btn-outline">
                Explore Courses
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-gray-100 pt-8 dark:border-slate-800">
              <div>
                <p className="font-display text-2xl font-bold text-mik-red">DOUBLECLICK</p>
                <p className="text-xs text-gray-500 dark:text-slate-500">Training Programme</p>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-slate-700" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">@MIK-InforTech</p>
                <p className="text-xs text-gray-500 dark:text-slate-500">Learn ICT with us</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mik-red/20 via-transparent to-mik-red/5" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-mik-gray-light to-white p-8 shadow-card dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[100%] bg-mik-red" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-[100%] bg-mik-gray/20" />

              <div className="relative space-y-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800">
                  <svg className="h-10 w-10 text-mik-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-medium text-mik-red">Founder & CEO</p>
                  <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                    Mahmud Isa Kawu
                  </p>
                </div>

                <ul className="space-y-3">
                  {['ICT Training', 'Certifications', 'Diploma Programmes', 'SIWES Accepted'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-mik-red text-xs font-bold text-white">
                          +
                        </span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>

                {!isAuthenticated && (
                  <Link
                    to="/get-started"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-mik-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-mik-red-dark"
                  >
                    Create Student Account →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-mik-red via-mik-red-light to-mik-red" />
    </section>
  )
}
