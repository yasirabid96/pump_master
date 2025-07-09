export interface LoginResponse {
  token: string
}

// Login function to authenticate user
export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    const { message } = await response.json()
    throw new Error(message ?? 'Login failed')
  }

  return (await response.json()) as LoginResponse
}
