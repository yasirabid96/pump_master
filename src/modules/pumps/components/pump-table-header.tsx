import { Button } from '@/components/ui/button'
import { Trash2, Search, Filter, Edit3 } from 'lucide-react'
import { Link } from 'react-router-dom'
export function PumpTableHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight">Pumps</h2>
        <div className="mt-10 flex items-center gap-5 text-muted-foreground">
          <Search className="w-5 h-5 cursor-pointer" />
          <Filter className="w-5 h-5 cursor-pointer" />
          <Edit3 className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 items-center">
        <Link to={'/pumps/1'}>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 text-xs h-10 w-24"
          >
            New Pump
          </Button>
        </Link>
        <Button
          variant="secondary"
          className="flex items-center gap-2 px-4 py-2 text-xs h-10  w-24 bg-blue-600 text-white hover:bg-blue-700"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </Button>
      </div>
    </div>
  )
}
