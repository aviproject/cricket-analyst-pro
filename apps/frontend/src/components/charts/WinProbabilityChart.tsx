import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { formatPercent } from '@/utils/formatters';

export type WinProbabilityPoint = {
  over: number;
  winProbability: number; // 0..1
};

type WinProbabilityChartProps = {
  data: WinProbabilityPoint[];
};

export function WinProbabilityChart({ data }: WinProbabilityChartProps) {
  return (
    <div className="cap-panel rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-tight text-white">
          Win Probability
        </div>
        <div className="text-xs text-[var(--muted)]">Over-by-over confidence</div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="over"
              tick={{ fill: 'rgba(231,235,245,0.65)', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
            />
            <YAxis
              tickFormatter={(v) => formatPercent(v, 0)}
              domain={[0, 1]}
              tick={{ fill: 'rgba(231,235,245,0.65)', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={42}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(12, 19, 43, 0.95)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 12,
                color: '#fff',
              }}
              labelStyle={{ color: 'rgba(231,235,245,0.8)' }}
              formatter={(value) => formatPercent(Number(value), 1)}
            />
            <Line
              type="monotone"
              dataKey="winProbability"
              stroke="var(--accent-2)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

