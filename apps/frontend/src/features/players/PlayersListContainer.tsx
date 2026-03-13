'use client';

import { PlayersTable } from '@/components/tables/PlayersTable';
import { usePlayers } from '@/hooks/usePlayers';
import type { Player } from '@/types/player.types';
import { Badge } from '@/components/ui/badge';
import { Users2 } from 'lucide-react';

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
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-muted text-muted-foreground flex gap-1.5 items-center">
              <Users2 className="w-3.5 h-3.5" />
              Intelligence Database
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground cap-gradient-text">Players</h1>
          <p className="mt-2 text-base text-muted-foreground">
            Explore player profiles with strike-rate trends, phase splits, and match history.
          </p>
        </div>
      </div>
      <div className="animate-fade-in-up stagger-1">
        <PlayersTable data={players} />
      </div>
    </div>
  );
}

