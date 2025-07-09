/**
 * API configuration for Pump Master backend integration.
 * All sensitive data (e.g. base URLs and API keys) are injected from
 * environment variables and should never be hardcoded.
 */

export const APICONFIG = {
  // Base URL for the Pump Master API backend
  BASE_URL:
    import.meta.env.VITE_PUMPMASTER_BASE_URL ||
    'https://api.example.com/pumpmaster',

  // API Key for authenticated requests (fetched from env)
  API_KEY: import.meta.env.VITE_PUMPMASTER_API_KEY,
}
