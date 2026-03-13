'use client';

import { useMemo } from 'react';
import { useMatch } from '@/hooks/useMatches';
import { BallEventsTable } from '@/components/tables/BallEventsTable';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { RunRateChart } from '@/components/charts/RunRateChart';
import type { BallEvent, Match } from '@/types/match.types';
import { formatDate } from '@/utils/formatters';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from 'lucide-react';

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
    <div className="space-y-8 animate-fade-in-up pb-8">
      {/* Match Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/50 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-accent border-accent/20 bg-accent/5">
              Live Analysis
            </Badge>
            {match.result && (
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                {match.result}
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-3">
            <span>{match.home_team}</span>
            <span className="text-muted-foreground font-light text-2xl">vs</span>
            <span>{match.away_team}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{formatDate(match.date)}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{match.venue}</span>
          </div>
        </div>
        
        {/* Score Bug */}
        <div className="flex items-center gap-6 rounded-xl border border-border bg-card/50 p-4 shadow-sm w-full md:w-auto overflow-x-auto">
          <div className="text-center min-w-[80px]">
            <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1">{match.home_team}</div>
            <div className="text-2xl font-bold font-mono">{match.home_score ?? '—'}</div>
          </div>
          <div className="h-10 w-px bg-border max-md:hidden" />
          <div className="text-center min-w-[80px]">
            <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1">{match.away_team}</div>
            <div className="text-2xl font-bold font-mono text-muted-foreground">{match.away_score ?? '—'}</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="mb-6 w-full sm:w-auto h-auto p-1 bg-muted/50 border border-border/50">
          <TabsTrigger value="timeline" className="rounded-md px-6 py-2">Timeline</TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-md px-6 py-2">Analytics</TabsTrigger>
          <TabsTrigger value="phases" className="rounded-md px-6 py-2">Phases</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="space-y-6 mt-0 animate-fade-in-up">
          <BallEventsTable data={demoEvents} />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-0 animate-fade-in-up">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <RunRateChart data={runRateSeries} requiredRunRate={9.2} />
            <WinProbabilityChart data={winProbabilitySeries} />
          </div>
        </TabsContent>
        
        <TabsContent value="phases" className="mt-0 animate-fade-in-up">
          <div className="h-32 flex items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground text-sm">
            Phase analysis visualization placeholder
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

