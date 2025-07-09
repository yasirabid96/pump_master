import { create } from 'zustand'

export interface DynamicPumpRow {
  [key: string]: string | number
}

interface PumpState {
  pumps: DynamicPumpRow[]
  columns: string[]
  isLoading: boolean
  fetchPumps: () => Promise<void>
}

export const usePumpStore = create<PumpState>((set) => ({
  pumps: [],
  columns: [],
  isLoading: true,
  fetchPumps: async () => {
    set({ isLoading: true })
    await new Promise((res) => setTimeout(res, 1200)) // simulate API delay

    const columns = [
      'Pump Name',
      'Type',
      'Area/Block',
      'Latitude',
      'Longitude',
      'Flow Rate',
      'Offset',
      'Current Pressure',
      'Min Pressure',
      'Max Pressure',
    ]

    const pumps: DynamicPumpRow[] = Array.from({ length: 40 }).map((_, i) => ({
      'Pump ID': `${1000 + i}`, // I have assumed a primary key for each pump
      'Pump Name': `Pump ${i + 1}`,
      Type: 'Centrifugal',
      'Area/Block': `Area ${String.fromCharCode(65 + i)}`,
      Latitude: 34.05,
      Longitude: 118.24,
      'Flow Rate': `${1000 - i * 200} GPM`,
      Offset: `${i} sec`,
      'Current Pressure': `${150 - i * 20} psi`,
      'Min Pressure': `${120 - i * 20} psi`,
      'Max Pressure': `${180 - i * 20} psi`,
    }))

    set({ pumps, columns, isLoading: false })
  },
}))
