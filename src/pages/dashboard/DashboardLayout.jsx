import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import DashboardSidebar from '../../components/dashboard/DashboardSidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'

const pageMeta = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Welcome back — here’s your learning overview' },
  '/dashboard/courses': { title: 'Browse Courses', subtitle: 'Explore and enroll in programmes' },
  '/dashboard/my-courses': { title: 'My Courses', subtitle: 'Courses you’re enrolled in' },
  '/dashboard/profile': { title: 'Profile', subtitle: 'Manage your account details' },
}

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()
  const meta = pageMeta[pathname] || pageMeta['/dashboard']

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader
          title={meta.title}
          subtitle={meta.subtitle}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
