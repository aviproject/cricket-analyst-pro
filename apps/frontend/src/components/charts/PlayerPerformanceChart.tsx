import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export type PlayerPerformancePoint = {
  label: string;
  value: number;
};

type PlayerPerformanceChartProps = {
  title: string;
  data: PlayerPerformancePoint[];
  color?: string;
};

export function PlayerPerformanceChart({
  title,
  data,
  color = 'var(--accent-2)',
}: PlayerPerformanceChartProps) {
  return (
    <div className="cap-panel rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-tight text-white">{title}</div>
        <div className="text-xs text-[var(--muted)]">Form and distribution</div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey="label"
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
            />
            <Bar dataKey="value" fill={color} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

