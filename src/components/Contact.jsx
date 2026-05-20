import { contact } from '../data/siteData'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-white py-16 dark:bg-slate-900 lg:py-24">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-mik-red">
              Contact Us
            </span>
            <h2 className="section-heading mt-2">Get in Touch</h2>
            <p className="section-subheading">
              Visit our institute in Kano or reach out by phone, email, or the form below.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mik-red/10 text-mik-red">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Address</p>
                  <p className="mt-1 text-sm text-gray-600">{contact.address}</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mik-red/10 text-mik-red">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm text-gray-600 hover:text-mik-red"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mik-red/10 text-mik-red">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-sm text-gray-600 hover:text-mik-red"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mik-red/10 text-mik-red">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Website</p>
                  <a
                    href={`https://${contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-gray-600 hover:text-mik-red"
                  >
                    {contact.website}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-mik-gray-light p-6 shadow-card dark:border-slate-700 dark:bg-slate-800 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-6 space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-mik-red focus:ring-2 focus:ring-mik-red/20"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-mik-red focus:ring-2 focus:ring-mik-red/20"
                  placeholder="Tell us about the course or service you're interested in..."
                />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
