import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export type PlayerPerformancePoint = {
  label: string;
  value: number;
};

type PlayerPerformanceChartProps = {
  title: string;
  data: PlayerPerformancePoint[];
  color?: string;
};

/* ── Color constants ── */
const BORDER = 'rgba(255, 255, 255, 0.08)';
const MUTED_FG = '#8b9dc3';
const MUTED_BG = '#111a3d';
const CARD_BG = '#0d1530';
const FG = '#e8ecf4';

export function PlayerPerformanceChart({
  title,
  data,
  color = '#e84638',
}: PlayerPerformanceChartProps) {
  return (
    <Card className="cap-card-stat overflow-hidden group">
      <CardHeader className="pb-2 border-b border-border/50">
        <CardTitle className="text-base font-semibold tracking-tight text-foreground">{title}</CardTitle>
        <CardDescription className="text-xs mt-1">
          Form and distribution
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 pt-4">
        <div className="h-[260px] w-full px-2 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={BORDER} vertical={false} opacity={0.5} />
              <XAxis
                dataKey="label"
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: BORDER }}
                tickMargin={8}
              />
              <YAxis
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={40}
                tickMargin={8}
              />
              <Tooltip
                cursor={{ fill: MUTED_BG, opacity: 0.4 }}
                contentStyle={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  color: FG,
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '8px 12px'
                }}
                itemStyle={{ color, fontWeight: 600 }}
                labelStyle={{ color: MUTED_FG, marginBottom: '4px', display: 'block' }}
              />
              <Bar 
                dataKey="value" 
                fill={color} 
                radius={[4, 4, 0, 0]} 
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
