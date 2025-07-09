import { PumpTable } from '@/modules/pumps/components/pump-table'
import { PumpTableHeader } from '@/modules/pumps/components/pump-table-header'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-4">
      <section>
        <PumpTableHeader />
        <PumpTable />
      </section>
    </div>
  )
}
