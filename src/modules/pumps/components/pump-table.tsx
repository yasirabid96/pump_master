import { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { usePumpStore } from '@/hooks/usePumpStore'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { useNavigate } from 'react-router-dom'

export function PumpTable() {
  const { pumps, columns, fetchPumps, isLoading } = usePumpStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPumps()
  }, [fetchPumps])

  if (isLoading && pumps.length === 0) {
    return <LoadingSkeleton />
  }

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column} className="text-xs text-muted-foreground">
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {pumps.map((row, i) => (
            <TableRow
              key={i}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => {
                navigate(`/pumps/${row['Pump ID']}`)
              }}
            >
              {columns.map((col) => (
                <TableCell key={col} className="text-sm">
                  {row[col] ?? '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
