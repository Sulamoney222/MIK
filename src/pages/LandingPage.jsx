import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Courses from '../components/Courses'
import SiWesBanner from '../components/SiWesBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <SiWesBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
