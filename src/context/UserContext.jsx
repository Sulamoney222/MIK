import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'mik-user'

const defaultUser = {
  id: null,
  fullName: '',
  email: '',
  phone: '',
  studentId: '',
  bio: '',
  enrolledCourses: [],
  joinedAt: null,
}

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser({ ...defaultUser, ...JSON.parse(raw) })
    } catch {
      /* ignore */
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    if (user.id) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [user, loaded])

  const login = (profile) => {
    const newUser = {
      ...defaultUser,
      ...profile,
      id: profile.id || `user-${Date.now()}`,
      studentId: profile.studentId || `MIK-${String(Date.now()).slice(-6)}`,
      joinedAt: profile.joinedAt || new Date().toISOString(),
      enrolledCourses: profile.enrolledCourses || [],
    }
    setUser(newUser)
    return newUser
  }

  const logout = () => setUser(defaultUser)

  const updateProfile = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }))
  }

  const enrollCourse = (courseId) => {
    setUser((prev) => {
      if (prev.enrolledCourses.includes(courseId)) return prev
      return {
        ...prev,
        enrolledCourses: [...prev.enrolledCourses, courseId],
      }
    })
  }

  const unenrollCourse = (courseId) => {
    setUser((prev) => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses.filter((id) => id !== courseId),
    }))
  }

  const isEnrolled = (courseId) => user.enrolledCourses.includes(courseId)

  const isAuthenticated = Boolean(user.id)

  return (
    <UserContext.Provider
      value={{
        user,
        loaded,
        login,
        logout,
        updateProfile,
        enrollCourse,
        unenrollCourse,
        isEnrolled,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
