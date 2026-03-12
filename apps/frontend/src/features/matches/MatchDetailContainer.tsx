'use client';

import { useMemo } from 'react';
import { useMatch } from '@/hooks/useMatches';
import { BallEventsTable } from '@/components/tables/BallEventsTable';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { RunRateChart } from '@/components/charts/RunRateChart';
import type { BallEvent, Match } from '@/types/match.types';
import { formatDate } from '@/utils/formatters';

const demoMatch: Match = {
  id: 'm_1024',
  date: new Date(Date.now() - 86400000 * 2).toISOString(),
  venue: 'Wankhede Stadium',
  home_team: 'Mumbai',
  away_team: 'Chennai',
  result: 'Mumbai won by 6 wickets',
  home_score: 186,
  away_score: 182,
};

const demoEvents: BallEvent[] = Array.from({ length: 60 }, (_, i) => ({
  id: `be_${i}`,
  match_id: demoMatch.id,
  innings: 2,
  over: Math.floor(i / 6) + 1,
  ball: (i % 6) + 1,
  batting_team: 'Mumbai',
  batter: i % 2 === 0 ? 'R. Sharma' : 'S. Yadav',
  bowler: i % 3 === 0 ? 'D. Chahar' : 'R. Jadeja',
  runs: [0, 1, 2, 4, 6][i % 5],
  wicket: i === 37 ? true : false,
}));

export function MatchDetailContainer({ id }: { id: string }) {
  const { data } = useMatch(id);
  const match = (data as Match | undefined) ?? demoMatch;

  const winProbabilitySeries = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        over: i + 1,
        winProbability: Math.max(
          0.06,
          Math.min(0.94, 0.48 + Math.sin(i / 3) * 0.12 + i * 0.01),
        ),
      })),
    [],
  );

  const runRateSeries = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        over: i + 1,
        runRate: Math.max(4.5, 6.1 + Math.sin(i / 2) * 1.0 + (i > 15 ? 1.2 : 0)),
      })),
    [],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-white">
            {match.home_team} vs {match.away_team}
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {formatDate(match.date)} • {match.venue} • {match.result ?? 'Result pending'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85">
            Scoreline: {match.home_score ?? '—'} / {match.away_score ?? '—'}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85">
            Analyst mode: Timeline + Probabilities
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <RunRateChart data={runRateSeries} />
        <WinProbabilityChart data={winProbabilitySeries} />
      </div>

      <BallEventsTable data={demoEvents} />
    </div>
  );
}

