import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Pencil } from 'lucide-react'

export interface PumpRow {
  [key: string]: string | number
}

interface EditPumpDialogProps {
  pump: PumpRow
  onSave: (updated: PumpRow) => void
}

export function EditPumpDialog({ pump, onSave }: EditPumpDialogProps) {
  const [form, setForm] = useState({
    name: pump['Pump Name'] as string,
    flow: pump['Flow Rate'] as string,
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Edit Pump</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium">Pump Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="text-xs font-medium">Flow Rate</label>
            <Input
              value={form.flow}
              onChange={(e) => setForm({ ...form, flow: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() =>
                onSave({
                  ...pump,
                  'Pump Name': form.name,
                  'Flow Rate': form.flow,
                })
              }
            >
              Save
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
