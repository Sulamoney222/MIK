import { contact } from '../data/siteData'

export default function SiWesBanner() {
  return (
    <section className="relative overflow-hidden bg-mik-red py-12 lg:py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white" />
      </div>

      <div className="section-container relative">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Special Programme
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              We Also Accept SIWES Students
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/90">
              Industrial training placements for students seeking real-world ICT experience.
              Press the power button on your career path, education, and skills with us.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-xl">
            <p className="text-sm font-medium text-gray-600">For more info, call</p>
            <a
              href={`tel:${contact.call}`}
              className="font-display text-3xl font-bold text-mik-red hover:text-mik-red-dark"
            >
              {contact.call}
            </a>
            <p className="text-xs font-semibold uppercase tracking-wide text-mik-red">
              Registration in progress
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
