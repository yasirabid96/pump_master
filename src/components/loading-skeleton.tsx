import { Skeleton } from './ui/skeleton'

export const LoadingSkeleton = () => {
  return (
    <div className="rounded-md border overflow-x-auto">
      <div className="space-y-2 p-4">
        {Array.from({ length: 40 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-full rounded-sm" />
        ))}
      </div>
    </div>
  )
}
