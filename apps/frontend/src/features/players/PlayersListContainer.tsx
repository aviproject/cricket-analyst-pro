'use client';

import { PlayersTable } from '@/components/tables/PlayersTable';
import { usePlayers } from '@/hooks/usePlayers';
import type { Player } from '@/types/player.types';

const demoPlayers: Player[] = [
  { id: 'p_1', name: 'R. Sharma', role: 'Batter', team: 'Mumbai' },
  { id: 'p_2', name: 'V. Kohli', role: 'Batter', team: 'Bangalore' },
  { id: 'p_3', name: 'J. Bumrah', role: 'Bowler', team: 'Mumbai' },
  { id: 'p_4', name: 'R. Jadeja', role: 'All-Rounder', team: 'Chennai' },
  { id: 'p_5', name: 'M. Dhoni', role: 'Wicket-Keeper', team: 'Chennai' },
];

export function PlayersListContainer() {
  const { data } = usePlayers();
  const players = (data?.length ? (data as Player[]) : demoPlayers).slice(0, 40);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">Players</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Explore player profiles with strike-rate trends, phase splits, and match history.
        </p>
      </div>
      <PlayersTable data={players} />
    </div>
  );
}

