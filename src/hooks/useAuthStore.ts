import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  setToken: (token: string) => void
  logout: () => void
}

// Zustand store for authentication state and stores the cached token
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,

      setToken: (token: string) => set({ token }),

      logout: () => set({ token: null }),
    }),
    {
      name: 'pumpmaster-auth',
    },
  ),
)
