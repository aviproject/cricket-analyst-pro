export type SimulationInput = {
  runsRequired: number;
  ballsRemaining: number;
  wicketsRemaining: number;
  battingOrder: string[];
};

export type SimulationSeriesPoint = {
  scenario: string;
  winProbability: number; // 0..1
};

export type SimulationResult = {
  winProbability: number; // 0..1
  distribution: Array<{ over: number; winProbability: number }>;
  scenarios: SimulationSeriesPoint[];
};

