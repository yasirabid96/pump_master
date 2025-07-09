import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'

import Layout from './components/layout'
import LoginPage from './pages/login-page'
import DashboardPage from './pages/dashboard-page'
import PumpDetailPage from './pages/pump-detail-page'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      gcTime: 1000 * 60 * 10,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Routes without Layout */}
          <Route path="/login" element={<LoginPage />} />

          {/* Routes with Layout wrapper */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <DashboardPage />
              </Layout>
            }
          />
          <Route
            path="/pumps/:pumpId"
            element={
              <Layout>
                <PumpDetailPage />
              </Layout>
            }
          />
        </Routes>
        <Toaster richColors />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
