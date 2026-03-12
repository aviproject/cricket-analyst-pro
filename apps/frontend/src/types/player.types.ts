export type Player = {
  id: string;
  name: string;
  role: 'Batter' | 'Bowler' | 'All-Rounder' | 'Wicket-Keeper';
  team: string;
  batting_style?: string | null;
  bowling_style?: string | null;
};

export type PlayerMatchRow = {
  match_id: string;
  date: string;
  opponent: string;
  runs: number;
  balls: number;
  strike_rate: number;
  wickets: number;
  economy: number;
};

