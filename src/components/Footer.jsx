import Logo from './Logo'
import { contact, navLinks } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" className="[&_span]:text-white [&_p]:text-gray-400" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Computer Training Institute and ICT Consultancy. Solution to ICT and its education.
            </p>
            <p className="mt-4 text-sm font-medium text-white">Mahmud Isa Kawu</p>
            <p className="text-xs text-gray-500">Founder & CEO</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-mik-red-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{contact.address}</li>
              {contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-mik-red-light">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-mik-red-light">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm italic text-gray-400">
            Press the Power Button of your Career Path, Education and its Skills with Us...!
          </p>
          <p className="mt-4 text-xs text-gray-500">
            &copy; {year} MIK InforTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
