import { useAuthStore } from '@/hooks/useAuthStore'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

export function ProtectedRoute({ children }: Props) {
  const token = useAuthStore((s) => s.token)

  // If no token is found, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}
