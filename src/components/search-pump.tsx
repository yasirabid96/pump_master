import { CommandDialog, CommandInput, CommandList } from './ui/command'
import { Button } from './ui/button'
import { useState } from 'react'
import { Search } from 'lucide-react'
const PumpSearch = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <>
      <Button
        variant={'outline'}
        className="cursor-pointer relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4"></Search>
        Search
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search Pump"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList></CommandList>
      </CommandDialog>
    </>
  )
}

export default PumpSearch
