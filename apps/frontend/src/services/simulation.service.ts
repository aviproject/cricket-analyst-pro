import type { SimulationInput, SimulationResult } from '@/types/simulation.types';

export async function runSimulation(input: SimulationInput): Promise<SimulationResult> {
  const baseWin = Math.max(
    0.12,
    Math.min(
      0.92,
      0.5 -
        input.runsRequired / Math.max(1, input.ballsRemaining * 2.2) +
        input.wicketsRemaining * 0.03,
    ),
  );

  const distribution = Array.from({ length: 4 }, (_, i) => ({
    over: Math.max(0, 20 - (4 - i)),
    winProbability: Math.max(0.05, Math.min(0.97, baseWin + (i - 2) * 0.04)),
  }));

  const scenarios = [
    { scenario: 'Baseline', winProbability: baseWin },
    { scenario: 'Promote finisher', winProbability: Math.min(0.97, baseWin + 0.07) },
    { scenario: 'Hold anchor', winProbability: Math.max(0.05, baseWin - 0.05) },
  ];

  return Promise.resolve({
    winProbability: baseWin,
    distribution,
    scenarios,
  });
}

export async function predictWinProbability(input: SimulationInput): Promise<{ winProbability: number }> {
  const result = await runSimulation(input);
  return { winProbability: result.winProbability };
}

