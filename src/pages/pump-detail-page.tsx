import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePumpStore } from '@/hooks/usePumpStore'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { PressureChartSection } from '@/components/pressure-chart'

export default function PumpDetailPage() {
  const { pumpId } = useParams<{ pumpId: string }>()
  const { pumps, fetchPumps, isLoading } = usePumpStore()

  useEffect(() => {
    if (pumps.length === 0) {
      fetchPumps()
    }
  }, [fetchPumps, pumps.length])

  const pump = pumps.find((p) => String(p['Pump ID']) === String(pumpId))

  if (isLoading || pumps.length === 0) {
    return <LoadingSkeleton />
  }

  if (!pump) return <div className="p-6 text-red-500">Pump not found.</div>

  const attributes: Record<string | number, string | number> = {
    Type: pump.Type,
    'Area/Block': pump['Area/Block'],
    'Location (lat/lon)': `${pump.Latitude}, ${pump.Longitude}`,
    'Flow Rate': pump['Flow Rate'],
    Offset: pump.Offset,
    'Pressure (Current | Min | Max)': `${pump['Current Pressure']} | ${pump['Min Pressure']} | ${pump['Max Pressure']}`,
  }
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between">
        <h1 className="text-3xl font-bold">Pump {pumpId}</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-right">
          <div>Pump ID:</div>
          <div>{pumpId}</div>

          <div>Status:</div>
          <div>Operational</div>

          <div>Last Updated:</div>
          <div>2024‑01‑20 14:30</div>
        </div>
      </header>

      {/* Attributes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Attributes</h2>

        <div className="grid grid-cols-1 gap-y-2 text-sm w-full">
          {Object.entries(attributes).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Map</h2>
        <div className="h-72 w-full bg-muted rounded-lg" />
      </section>

      {/* Chart */}
      <section>
        <PressureChartSection />
      </section>
    </div>
  )
}
