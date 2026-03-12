'use client';

import { DashboardView } from './DashboardView';
import { useMatches } from '@/hooks/useMatches';
import type { Match } from '@/types/match.types';

const demoMatches: Match[] = [
  {
    id: 'm_1024',
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    venue: 'Wankhede Stadium',
    home_team: 'Mumbai',
    away_team: 'Chennai',
    result: 'Mumbai won by 6 wickets',
    home_score: 186,
    away_score: 182,
  },
  {
    id: 'm_1023',
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
    venue: 'Eden Gardens',
    home_team: 'Kolkata',
    away_team: 'Bangalore',
    result: 'Kolkata won by 22 runs',
    home_score: 201,
    away_score: 179,
  },
  {
    id: 'm_1022',
    date: new Date(Date.now() - 86400000 * 8).toISOString(),
    venue: 'Narendra Modi Stadium',
    home_team: 'Gujarat',
    away_team: 'Delhi',
    result: 'Delhi won by 3 wickets',
    home_score: 164,
    away_score: 165,
  },
];

const demoWinProb = Array.from({ length: 20 }, (_, i) => ({
  over: i + 1,
  winProbability: Math.max(0.08, Math.min(0.92, 0.2 + i * 0.03 + Math.sin(i / 2) * 0.05)),
}));

const demoRunRate = Array.from({ length: 20 }, (_, i) => ({
  over: i + 1,
  runRate: Math.max(4.8, 6.2 + Math.sin(i / 2) * 1.1 + (i > 14 ? 0.8 : 0)),
}));

export function DashboardContainer() {
  const { data, isLoading, isError } = useMatches();
  const matches: Match[] =
    Array.isArray(data) && data.length > 0 ? (data as Match[]).slice(0, 8) : demoMatches;

  const averageScore = Math.round(
    matches.reduce((acc, m) => acc + Number(m.home_score ?? 0), 0) / Math.max(1, matches.length),
  );

  const metrics = {
    averageScore: isLoading ? '—' : `${averageScore}`,
    winRate: isError ? '—' : '58%',
    topPerformer: 'R. Sharma',
    simulationAccuracy: '71%',
  };

  return (
    <DashboardView
      metrics={metrics}
      recentMatches={matches}
      winProbabilitySeries={demoWinProb}
      runRateSeries={demoRunRate}
    />
  );
}

