// pump-api.ts
import { APICONFIG } from './config'
import type { DynamicPumpRow } from '@/hooks/usePumpStore'

// For now this class is dummy and only implements the methods to showcase the API structure.
// In the app I am using dummy data from the store.
class PumpAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const search = new URLSearchParams(params as Record<string, string>)
    return `${endpoint}?${search.toString()}`
  }

  private async fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Pump API error: ${res.statusText}`)
    return res.json() as Promise<T>
  }

  /** GET /api/pumps → list of pumps */
  async getAll(): Promise<DynamicPumpRow[]> {
    const url = this.createUrl(`${APICONFIG.BASE_URL}/pumps`, {})
    return this.fetchData<DynamicPumpRow[]>(url)
  }

  /** PATCH /api/pumps/:id → update pump */
  async update(id: string, payload: Partial<DynamicPumpRow>) {
    const url = `${APICONFIG.BASE_URL}/pumps/${id}`
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Update failed: ${res.statusText}`)
    return res.json() as Promise<DynamicPumpRow>
  }
}

export const pumpAPI = new PumpAPI()
