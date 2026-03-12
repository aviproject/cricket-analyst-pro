export type Match = {
  id: string;
  date: string; // ISO
  venue: string;
  home_team: string;
  away_team: string;
  home_score?: number | null;
  away_score?: number | null;
  result?: string | null;
};

export type BallEvent = {
  id: string;
  match_id: string;
  innings: number;
  over: number;
  ball: number;
  batting_team: string;
  bowler: string;
  batter: string;
  runs: number;
  wicket?: boolean | null;
  extra_type?: string | null;
};

