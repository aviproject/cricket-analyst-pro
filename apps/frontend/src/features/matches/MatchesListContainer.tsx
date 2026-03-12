'use client';

import { MatchesTable } from '@/components/tables/MatchesTable';
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

export function MatchesListContainer() {
  const { data } = useMatches();
  const matches = (data?.length ? (data as Match[]) : demoMatches).slice(0, 20);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">Matches</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Browse fixtures and open match intelligence views with ball-by-ball context.
        </p>
      </div>
      <MatchesTable data={matches} />
    </div>
  );
}

