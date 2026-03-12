'use client';

import type { Player } from '@/types/player.types';
import { PlayerPerformanceChart } from '@/components/charts/PlayerPerformanceChart';

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
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-white">{player.name}</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {player.team} • {player.role} • Contextual form snapshot
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85">
            Analyst preset: T20 batting
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="cap-panel rounded-2xl p-4">
          <div className="text-sm font-semibold tracking-tight text-white">
            Player profile
          </div>
          <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <div>
              <span className="text-white/80">Preferred role:</span> Top-order anchor
            </div>
            <div>
              <span className="text-white/80">Strength:</span> Powerplay seam, off-side scoring
            </div>
            <div>
              <span className="text-white/80">Risk:</span> Spin in middle overs
            </div>
          </div>
        </div>
        <PlayerPerformanceChart title="Strike rate trend" data={strikeRateTrend} />
        <PlayerPerformanceChart
          title="Runs distribution by phase"
          data={runsDistribution}
          color="var(--accent)"
        />
      </div>

      <PlayerPerformanceChart
        title="Phase analysis (shot selection vs. outcome)"
        data={phaseAnalysis}
        color="var(--good)"
      />
    </div>
  );
}

