export const services = [
  { title: 'ICT Training', icon: 'monitor' },
  { title: 'Computer Repair & Services', icon: 'wrench' },
  { title: 'Networking', icon: 'network' },
  { title: 'Software Development', icon: 'code' },
  { title: 'Project Management', icon: 'clipboard' },
  { title: 'ICT Consultancy', icon: 'briefcase' },
]

export const technicalSkills = [
  'Computer Repair & Services',
  'Cyber Security',
  'CCTV Installation',
  'Networking',
  'Electric Fencing',
  'C Programming',
  'Inter-Comm.',
  'Solar System Installation',
  'Web Site Design',
  'Digital Marketing Skills',
  'Software Development',
]

export const certificates = [
  'Certificate in Basic Computing',
  'Certificate in Graphics Design',
  'Certificate in AutoCAD 2D, 3D',
  'Certificate in Computer Maintenance and Repairs',
  'Certificate in QuickBooks Accountant Software',
  'Certificate in Oracle DataBase',
]

export const diplomas = [
  'Diploma in Information Technology',
  'Diploma in Computer Networking',
  'Diploma in Multi-Media',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses' },
  { label: 'Contact', href: '#contact' },
]

export const contact = {
  address: 'Suite No. 2 KSIP Shopping Complex, Kundila, Maiduguri Rd. Kano State',
  phones: ['+234 7064-313-294', '+234 7088-255-560'],
  email: 'mikinfortech01@gmail.com',
  website: 'www.mikinfortech.com.ng',
  call: '07064313294',
}

const makeCourse = (id, title, category, duration, level, description) => ({
  id,
  title,
  category,
  duration,
  level,
  description,
})

export const allCourses = [
  ...technicalSkills.map((title, i) =>
    makeCourse(
      `tech-${i}`,
      title,
      'Technical',
      '8–12 weeks',
      'Intermediate',
      `Hands-on training in ${title.toLowerCase()} with practical projects and industry tools.`,
    ),
  ),
  ...certificates.map((title, i) =>
    makeCourse(
      `cert-${i}`,
      title,
      'Certificate',
      '3–6 months',
      'Beginner',
      `Earn a recognized certificate in ${title.replace('Certificate in ', '')}.`,
    ),
  ),
  ...diplomas.map((title, i) =>
    makeCourse(
      `dip-${i}`,
      title,
      'Diploma',
      '12–18 months',
      'Advanced',
      `Comprehensive diploma programme covering ${title.replace('Diploma in ', '')}.`,
    ),
  ),
]

export const courseCategories = ['All', 'Technical', 'Certificate', 'Diploma']
