import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loaded } = useUser()

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-mik-red border-t-transparent" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/get-started" replace />
  }

  return children
}
