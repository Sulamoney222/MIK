export default function About() {
  return (
    <section id="about" className="bg-mik-gray-light py-16 dark:bg-slate-800/50 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-mik-red">
            About Us
          </span>
          <h2 className="section-heading mt-2">MIK InforTech Computer Training Institute</h2>
          <p className="section-subheading mx-auto">
            And ICT Consultancy — empowering learners across Kano State and beyond with
            practical digital skills for today&apos;s workforce.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Beginner Friendly',
              desc: 'Structured programmes for those starting their ICT journey, with hands-on support at every step.',
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
              title: 'Professional Growth',
              desc: 'Advanced courses in networking, software development, cyber security, and project management.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              ),
            },
            {
              title: 'Community Learning',
              desc: 'Learn from experienced instructors and a community committed to sharing ICT knowledge worldwide.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white bg-white p-6 shadow-card transition hover:shadow-card-hover dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mik-red/10 text-mik-red">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {card.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">{card.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-mik-red bg-white p-6 shadow-card dark:bg-slate-800 sm:p-8">
          <p className="text-base italic leading-relaxed text-gray-700 dark:text-slate-300 sm:text-lg">
            &ldquo;Whether you&apos;re a beginner or a professional, there&apos;s always more to
            learn. From community members all over the world, these vast resources will help you
            learn more about ICT and share it with others.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
