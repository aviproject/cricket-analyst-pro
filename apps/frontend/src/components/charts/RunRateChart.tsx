import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceArea,
  ReferenceLine
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export type RunRatePoint = {
  over: number;
  runRate: number;
};

type RunRateChartProps = {
  data: RunRatePoint[];
  requiredRunRate?: number; // Optional reference line
};

/* ── Color constants (avoid hsl wrapping on hex vars) ── */
const EMERALD = '#10b981';
const DESTRUCTIVE = '#ef4444';
const BORDER = 'rgba(255, 255, 255, 0.08)';
const MUTED_FG = '#8b9dc3';
const CARD_BG = '#0d1530';
const FG = '#e8ecf4';
const BG = '#0a1128';

export function RunRateChart({ data, requiredRunRate = 8.5 }: RunRateChartProps) {
  return (
    <Card className="cap-card-stat overflow-hidden group">
      <CardHeader className="pb-2 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-500" />
              Run Rate Tracking
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Tempo, scoring pressure, and phases
            </CardDescription>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-xs font-semibold text-emerald-500">CUR: {data[data.length - 1]?.runRate.toFixed(2) || '0.00'}</div>
            {requiredRunRate && (
              <div className="text-[10px] text-muted-foreground uppercase mt-0.5 tracking-wider">
                REQ: {requiredRunRate.toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-4">
        <div className="h-[280px] w-full px-2 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="rrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={EMERALD} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={EMERALD} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={BORDER} vertical={false} opacity={0.5} />
              
              {/* Match Phases - Powerplay, Middle, Death */}
              <ReferenceArea x1={0} x2={6} fill={MUTED_FG} fillOpacity={0.05} />
              <ReferenceArea x1={15} x2={20} fill={DESTRUCTIVE} fillOpacity={0.05} />
              
              {/* Required Run Rate Reference Line */}
              {requiredRunRate && (
                <ReferenceLine 
                  y={requiredRunRate} 
                  stroke={DESTRUCTIVE} 
                  strokeDasharray="4 4" 
                  opacity={0.6}
                  label={{ position: 'insideTopLeft', value: 'RRR', fill: DESTRUCTIVE, fontSize: 10, offset: 5 }}
                />
              )}

              <XAxis
                dataKey="over"
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: BORDER }}
                tickMargin={8}
                minTickGap={20}
              />
              <YAxis
                tick={{ fill: MUTED_FG, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={40}
                tickMargin={8}
                domain={['auto', 'auto']}
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
                itemStyle={{ color: EMERALD, fontWeight: 600 }}
                labelStyle={{ color: MUTED_FG, marginBottom: '4px', display: 'block' }}
                labelFormatter={(label) => `Over ${label}`}
                formatter={(value: any) => [Number(value).toFixed(2), 'Run Rate']}
                cursor={{ stroke: EMERALD, strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area
                type="monotone"
                dataKey="runRate"
                stroke={EMERALD}
                fill="url(#rrGradient)"
                strokeWidth={2.5}
                activeDot={{ r: 5, strokeWidth: 2, stroke: BG, fill: EMERALD }}
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
