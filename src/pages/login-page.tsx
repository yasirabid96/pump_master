import { useState } from 'react'
import { login } from '@/api/auth'
import { toast } from 'sonner'
import { useAuthStore } from '@/hooks/useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      //TODO: Implement the actual login logic here

      //   const { token } = await login(username, password)
      //   localStorage.setItem('pumpmaster_token', token)
      //   toast.success('Logged in!')

      //   // navigate to dashboard from here and save token to cache .
      //   const setToken = useAuthStore((state) => state.setToken)
      //   setToken(token)

      navigate('dashboard')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <header className="h-12 w-full border-b px-4 flex items-center">
        <span className="font-semibold">PumpMaster</span>
      </header>

      {/* Form */}
      <main className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-6 text-center"
        >
          <h1 className="text-2xl font-semibold">Welcome back</h1>

          <div className="text-left space-y-4">
            <label className="block">
              <span className="mb-1 block font-medium">Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring"
              />
            </label>

            <label className="block">
              <span className="mb-1 block font-medium">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            Log in
          </button>

          <p className="text-sm">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </form>
      </main>
    </div>
  )
}
