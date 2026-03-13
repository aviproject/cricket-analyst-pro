import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
};

export function MetricCard({ label, value, delta, hint, icon, trend = 'neutral' }: MetricCardProps) {
  return (
    <Card className="cap-card-hero group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-semibold">
          {label}
        </CardTitle>
        {icon ? (
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-[#e84638]/15 text-[#e84638] transition-colors group-hover:bg-[#e84638] group-hover:text-white">
            {icon}
          </div>
        ) : null}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-mono tracking-tight cap-gradient-text animate-count-up">
          {value}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {delta && (
            <Badge 
              variant="outline" 
              className={cn(
                "gap-1 font-mono text-xs",
                trend === 'up' && "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
                trend === 'down' && "text-red-400 border-red-500/30 bg-red-500/10",
                trend === 'neutral' && "text-amber-400 border-amber-500/30 bg-amber-500/10"
              )}
            >
              {trend === 'up' && <TrendingUp className="h-3 w-3" />}
              {trend === 'down' && <TrendingDown className="h-3 w-3" />}
              {trend === 'neutral' && <Minus className="h-3 w-3" />}
              {delta}
            </Badge>
          )}
          {hint && <span className="text-[11px] text-muted-foreground">{hint}</span>}
        </div>
      </CardContent>
    </Card>
  );
}

