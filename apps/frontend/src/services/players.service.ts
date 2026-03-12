import type { Player, PlayerMatchRow } from '@/types/player.types';

// Temporary in-frontend dummy data until backend endpoints are wired.

const DEMO_PLAYERS: Player[] = [
  { id: 'p_1', name: 'R. Sharma', role: 'Batter', team: 'Mumbai' },
  { id: 'p_2', name: 'V. Kohli', role: 'Batter', team: 'Bangalore' },
  { id: 'p_3', name: 'J. Bumrah', role: 'Bowler', team: 'Mumbai' },
  { id: 'p_4', name: 'R. Jadeja', role: 'All-Rounder', team: 'Chennai' },
  { id: 'p_5', name: 'M. Dhoni', role: 'Wicket-Keeper', team: 'Chennai' },
];

const DEMO_HISTORY: PlayerMatchRow[] = [
  {
    match_id: 'm_1024',
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    opponent: 'Chennai',
    runs: 68,
    balls: 38,
    strike_rate: 178.9,
    wickets: 0,
    economy: 0,
  },
  {
    match_id: 'm_1023',
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
    opponent: 'Bangalore',
    runs: 42,
    balls: 29,
    strike_rate: 144.8,
    wickets: 0,
    economy: 0,
  },
  {
    match_id: 'm_1022',
    date: new Date(Date.now() - 86400000 * 8).toISOString(),
    opponent: 'Delhi',
    runs: 32,
    balls: 24,
    strike_rate: 133.3,
    wickets: 0,
    economy: 0,
  },
];

export async function getPlayers(): Promise<Player[]> {
  return Promise.resolve(DEMO_PLAYERS);
}

export async function getPlayerDetails(id: string): Promise<Player> {
  const player = DEMO_PLAYERS.find((p) => p.id === id) ?? DEMO_PLAYERS[0];
  return Promise.resolve(player);
}

export async function getPlayerMatchHistory(_id: string): Promise<PlayerMatchRow[]> {
  return Promise.resolve(DEMO_HISTORY);
}

