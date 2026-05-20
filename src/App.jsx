import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import GetStartedPage from './pages/GetStartedPage'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import OverviewPage from './pages/dashboard/OverviewPage'
import BrowseCoursesPage from './pages/dashboard/BrowseCoursesPage'
import MyCoursesPage from './pages/dashboard/MyCoursesPage'
import ProfilePage from './pages/dashboard/ProfilePage'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<OverviewPage />} />
              <Route path="courses" element={<BrowseCoursesPage />} />
              <Route path="my-courses" element={<MyCoursesPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
