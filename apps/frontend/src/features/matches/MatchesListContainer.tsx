'use client';

import { MatchesTable } from '@/components/tables/MatchesTable';
import { useMatches } from '@/hooks/useMatches';
import type { Match } from '@/types/match.types';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

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
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-muted text-muted-foreground flex gap-1.5 items-center">
              <CalendarDays className="w-3.5 h-3.5" />
              Tournament Mode
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground cap-gradient-text">Matches</h1>
          <p className="mt-2 text-base text-muted-foreground">
            Browse fixtures and open match intelligence views with ball-by-ball context.
          </p>
        </div>
      </div>
      <div className="animate-fade-in-up stagger-1">
        <MatchesTable data={matches} />
      </div>
    </div>
  );
}

