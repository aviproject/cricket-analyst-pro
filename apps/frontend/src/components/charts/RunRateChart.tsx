import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export type RunRatePoint = {
  over: number;
  runRate: number;
};

type RunRateChartProps = {
  data: RunRatePoint[];
};

export function RunRateChart({ data }: RunRateChartProps) {
  return (
    <div className="cap-panel rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-tight text-white">Run Rate</div>
        <div className="text-xs text-[var(--muted)]">Tempo & scoring pressure</div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="over"
              tick={{ fill: 'rgba(231,235,245,0.65)', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
            />
            <YAxis
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
              formatter={(value) => `${Number(value).toFixed(2)}`}
            />
            <defs>
              <linearGradient id="rrFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="runRate"
              stroke="var(--accent)"
              strokeWidth={2}
              fill="url(#rrFill)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

