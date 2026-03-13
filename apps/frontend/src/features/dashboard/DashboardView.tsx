import { MetricCard } from '@/components/cards/MetricCard';
import { MatchesTable } from '@/components/tables/MatchesTable';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { RunRateChart } from '@/components/charts/RunRateChart';
import type { Match } from '@/types/match.types';
import { Badge } from '@/components/ui/badge';
import { Activity, Target, Trophy, BrainCircuit } from 'lucide-react';
import { format } from 'date-fns';

type DashboardViewProps = {
  metrics: {
    averageScore: string;
    winRate: string;
    topPerformer: string;
    simulationAccuracy: string;
  };
  recentMatches: Match[];
  winProbabilitySeries: Array<{ over: number; winProbability: number }>;
  runRateSeries: Array<{ over: number; runRate: number }>;
};

export function DashboardView({
  metrics,
  recentMatches,
  winProbabilitySeries,
  runRateSeries,
}: DashboardViewProps) {
  return (
    <div className="space-y-8 pb-8">
      {/* Hero Greeting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-[#e84638] border-[#e84638]/20 bg-[#e84638]/5">
              Live Data Active
            </Badge>
            <span className="text-xs text-muted-foreground">{format(new Date(), 'EEEE, MMMM d')}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl cap-gradient-text">
            Good morning, Analyst
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Here's the tactical overview across your tracked fixtures and intelligent signals.
          </p>
        </div>
        
        <div className="flex items-center gap-3 animate-fade-in-up stagger-1">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">3 Live Matches</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up stagger-2">
        <MetricCard
          label="Average Score"
          value={metrics.averageScore}
          delta="+3.2%"
          hint="Weighted by venue"
          trend="up"
          icon={<Activity className="h-5 w-5" />}
        />
        <MetricCard
          label="Team Win Rate"
          value={metrics.winRate}
          delta="+1.1pp"
          hint="Across tracked fixtures"
          trend="up"
          icon={<Trophy className="h-5 w-5" />}
        />
        <MetricCard
          label="Top Performer"
          value={metrics.topPerformer}
          hint="By impact index"
          icon={<Target className="h-5 w-5" />}
        />
        <MetricCard
          label="Sim Accuracy"
          value={metrics.simulationAccuracy}
          delta="+0.8pp"
          hint="Backtest last 30"
          trend="up"
          icon={<BrainCircuit className="h-5 w-5" />}
        />
      </div>

      <div className="flex items-center gap-4 cap-divider animate-fade-in-up stagger-3">
        <span>In-Match Analytics</span>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 animate-fade-in-up stagger-4">
        <WinProbabilityChart data={winProbabilitySeries} />
        <RunRateChart data={runRateSeries} />
      </div>

      <div className="flex items-center gap-4 cap-divider animate-fade-in-up stagger-5">
        <span>Recent Results</span>
      </div>

      {/* Matches Table */}
      <div className="animate-fade-in-up stagger-6">
        <MatchesTable data={recentMatches} />
      </div>
    </div>
  );
}

