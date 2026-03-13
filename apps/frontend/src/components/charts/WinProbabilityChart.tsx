import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from 'recharts';
import { formatPercent } from '@/utils/formatters';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export type WinProbabilityPoint = {
  over: number;
  winProbability: number; // 0..1
};

type WinProbabilityChartProps = {
  data: WinProbabilityPoint[];
};

/* ── Color constants (avoid hsl wrapping on hex vars) ── */
const ACCENT = '#e84638';
const ACCENT_GLOW = 'rgba(232, 70, 58, 0.30)';
const BORDER = 'rgba(255, 255, 255, 0.08)';
const MUTED_FG = '#8b9dc3';
const CARD_BG = '#0d1530';
const FG = '#e8ecf4';
const BG = '#0a1128';

export function WinProbabilityChart({ data }: WinProbabilityChartProps) {
  return (
    <Card className="cap-card-stat overflow-hidden group">
      <CardHeader className="pb-2 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e84638] animate-pulse" />
              Win Probability
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Real-time over-by-over confidence
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold text-[#e84638]">TEAM A</div>
            <div className="text-[10px] text-muted-foreground uppercase mt-0.5 tracking-wider">vs Team B</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-4">
        <div className="h-[280px] w-full px-2 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="winGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={BORDER} vertical={false} opacity={0.5} />
              
              {/* 50% baseline reference */}
              <ReferenceLine y={0.5} stroke={MUTED_FG} strokeDasharray="3 3" opacity={0.4} />
              
              <XAxis
                dataKey="over"
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: BORDER }}
                tickMargin={8}
                minTickGap={20}
              />
              <YAxis
                tickFormatter={(v) => formatPercent(v, 0)}
                domain={[0, 1]}
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={48}
                tickMargin={8}
              />
              <Tooltip
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
                itemStyle={{ color: ACCENT, fontWeight: 600 }}
                labelStyle={{ color: MUTED_FG, marginBottom: '4px', display: 'block' }}
                labelFormatter={(label) => `Over ${label}`}
                formatter={(value: any) => [formatPercent(value, 1), 'Win Prob.']}
                cursor={{ stroke: ACCENT, strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area
                type="monotone"
                dataKey="winProbability"
                stroke={ACCENT}
                fill="url(#winGradient)"
                strokeWidth={2.5}
                activeDot={{ r: 5, strokeWidth: 2, stroke: BG, fill: ACCENT }}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
