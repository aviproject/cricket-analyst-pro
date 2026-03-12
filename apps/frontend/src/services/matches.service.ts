import type { Match, BallEvent } from '@/types/match.types';

// Temporary in-frontend dummy data so the UI feels complete before the backend is wired.

const DEMO_MATCHES: Match[] = [
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

const DEMO_EVENTS: BallEvent[] = Array.from({ length: 60 }, (_, i) => ({
  id: `be_${i}`,
  match_id: DEMO_MATCHES[0].id,
  innings: 2,
  over: Math.floor(i / 6) + 1,
  ball: (i % 6) + 1,
  batting_team: 'Mumbai',
  batter: i % 2 === 0 ? 'R. Sharma' : 'S. Yadav',
  bowler: i % 3 === 0 ? 'D. Chahar' : 'R. Jadeja',
  runs: [0, 1, 2, 4, 6][i % 5],
  wicket: i === 37 ? true : false,
}));

export async function getMatches(): Promise<Match[]> {
  return Promise.resolve(DEMO_MATCHES);
}

export async function getMatchDetails(id: string): Promise<Match> {
  const match = DEMO_MATCHES.find((m) => m.id === id) ?? DEMO_MATCHES[0];
  return Promise.resolve(match);
}

export async function getBallEvents(matchId: string): Promise<BallEvent[]> {
  const events = DEMO_EVENTS.filter((e) => e.match_id === matchId);
  return Promise.resolve(events.length ? events : DEMO_EVENTS);
}

