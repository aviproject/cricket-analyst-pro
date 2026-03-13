'use client';

import type { Player } from '@/types/player.types';
import { PlayerPerformanceChart } from '@/components/charts/PlayerPerformanceChart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Activity } from 'lucide-react';

const demoPlayer: Player = {
  id: 'p_1',
  name: 'R. Sharma',
  role: 'Batter',
  team: 'Mumbai',
};

export function PlayerDetailContainer({ id }: { id: string }) {
  const player = demoPlayer; // Wire to usePlayer(id) once backend is ready.

  const strikeRateTrend = [
    { label: 'M1', value: 142 },
    { label: 'M2', value: 130 },
    { label: 'M3', value: 166 },
    { label: 'M4', value: 152 },
    { label: 'M5', value: 178 },
  ];

  const runsDistribution = [
    { label: 'Powerplay', value: 34 },
    { label: 'Middle', value: 46 },
    { label: 'Death', value: 28 },
  ];

  const phaseAnalysis = [
    { label: 'Spin', value: 68 },
    { label: 'Pace', value: 54 },
    { label: 'Short', value: 62 },
    { label: 'Full', value: 71 },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up pb-8">
      {/* Player Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/50 pb-6">
        <div className="flex items-center gap-5">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center border-4 border-background shadow-md shadow-black/20 relative">
            <User className="h-10 w-10 text-muted-foreground" />
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-emerald-500 rounded-full border-2 border-background" title="Active" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-blue-500 border-blue-500/20 bg-blue-500/10">
                {player.role}
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                {player.team}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {player.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Contextual form snapshot and performance patterns
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2 text-xs shadow-sm">
            <Activity className="h-4 w-4 text-accent" />
            <span className="font-semibold text-foreground">Preset:</span>
            <span className="text-muted-foreground">T20 Batting</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="cap-card-stat flex flex-col">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20">
            <CardTitle className="text-base font-semibold tracking-tight text-foreground">Analyst Profile</CardTitle>
            <CardDescription className="text-xs mt-1">Strengths and vulnerabilities</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-5">
            <div className="space-y-5 text-sm">
              <div className="space-y-1.5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Preferred Role</div>
                <div className="font-medium text-foreground">Top-order anchor</div>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div className="space-y-1.5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Strength Area</div>
                <div className="font-medium text-emerald-500">Powerplay seam, off-side scoring</div>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div className="space-y-1.5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Risk Factor</div>
                <div className="font-medium text-red-500">Spin in middle overs</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <PlayerPerformanceChart title="Strike rate trend" data={strikeRateTrend} />
        <PlayerPerformanceChart
          title="Runs distribution by phase"
          data={runsDistribution}
          color="hsl(var(--accent))"
        />
      </div>

      <PlayerPerformanceChart
        title="Phase analysis (shot selection vs. outcome)"
        data={phaseAnalysis}
        color="#10b981"
      />
    </div>
  );
}

