import { useState } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const data = [
  { time: '10:00', pressure: 30 },
  { time: '10:30', pressure: 45 },
  { time: '11:00', pressure: 50 },
  { time: '11:30', pressure: 40 },
  { time: '12:00', pressure: 60 },
]

export function PressureChartSection() {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line')

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Pressure Over Time</h2>
        <Select
          value={chartType}
          onValueChange={(val: 'line' | 'bar') => setChartType(val)}
        >
          <SelectTrigger className="h-8 w-28 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="line">Line</SelectItem>
            <SelectItem value="bar">Bar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={data}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v} psi`}
              />
              <Line
                type="monotone"
                dataKey="pressure"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Tooltip
                content={({ active, payload }) =>
                  active && payload?.length ? (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <p>{`Time: ${payload[0].payload.time}`}</p>
                      <p>{`Pressure: ${payload[0].value} psi`}</p>
                    </div>
                  ) : null
                }
                labelFormatter={(l) => `Time: ${l}`}
                formatter={(v) => [`${v} psi`]}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v} psi`}
              />
              <Tooltip
                content={({ active, payload }) =>
                  active && payload?.length ? (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <p>{`Time: ${payload[0].payload.time}`}</p>
                      <p>{`Pressure: ${payload[0].value} psi`}</p>
                    </div>
                  ) : null
                }
                labelFormatter={(l) => `Time: ${l}`}
                formatter={(v) => [`${v} psi`]}
              />
              <Bar dataKey="pressure" fill="#2563eb" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  )
}
