import { MetricCard } from '@/components/cards/MetricCard';
import { MatchesTable } from '@/components/tables/MatchesTable';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { RunRateChart } from '@/components/charts/RunRateChart';
import type { Match } from '@/types/match.types';

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

function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardView({
  metrics,
  recentMatches,
  winProbabilitySeries,
  runRateSeries,
}: DashboardViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)] sm:text-[15px]">
            A tactical overview of match outcomes, form, and decision signals.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85">
            Live cache via React Query
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85">
            ML scoring through Simulation Lab
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <MetricCard
          label="Average Score"
          value={metrics.averageScore}
          delta="+3.2% last 10"
          hint="Weighted by venue"
          icon={<IconSpark />}
        />
        <MetricCard
          label="Team Win Rate"
          value={metrics.winRate}
          delta="+1.1pp"
          hint="Across tracked fixtures"
          icon={<IconSpark />}
        />
        <MetricCard
          label="Top Performer"
          value={metrics.topPerformer}
          hint="By impact index"
          icon={<IconSpark />}
        />
        <MetricCard
          label="Simulation Accuracy"
          value={metrics.simulationAccuracy}
          delta="+0.8pp"
          hint="Backtest last 30"
          icon={<IconSpark />}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <WinProbabilityChart data={winProbabilitySeries} />
        <RunRateChart data={runRateSeries} />
      </div>

      <MatchesTable data={recentMatches} />
    </div>
  );
}

