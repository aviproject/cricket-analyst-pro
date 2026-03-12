'use client';

import { useForm } from 'react-hook-form';
import { useSimulation } from '@/hooks/useSimulation';
import type { SimulationInput } from '@/types/simulation.types';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { formatPercent } from '@/utils/formatters';

type SimulationFormValues = {
  runsRequired: number;
  ballsRemaining: number;
  wicketsRemaining: number;
  battingOrder: string;
};

export function SimulationLabContainer() {
  const { register, handleSubmit, formState } = useForm<SimulationFormValues>({
    defaultValues: {
      runsRequired: 42,
      ballsRemaining: 24,
      wicketsRemaining: 6,
      battingOrder: 'Finisher, Anchor, Power-hitter, All-rounder',
    },
  });
  const simulation = useSimulation();

  const onSubmit = (values: SimulationFormValues) => {
    const payload: SimulationInput = {
      runsRequired: Number(values.runsRequired),
      ballsRemaining: Number(values.ballsRemaining),
      wicketsRemaining: Number(values.wicketsRemaining),
      battingOrder: values.battingOrder
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    };
    simulation.mutate(payload);
  };

  const result = simulation.data ?? {
    winProbability: 0.64,
    distribution: Array.from({ length: 4 }, (_, i) => ({
      over: i + 17,
      winProbability: 0.5 + i * 0.06,
    })),
    scenarios: [
      { scenario: 'Baseline', winProbability: 0.64 },
      { scenario: 'Promote finisher', winProbability: 0.71 },
      { scenario: 'Hold anchor', winProbability: 0.59 },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Simulation Lab
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Model end-game scenarios and understand how batting order, risk, and tempo impact
            win probability.
          </p>
        </div>
        <div className="rounded-xl border border-[var(--good)]/40 bg-[var(--good)]/10 px-3 py-2 text-xs text-[var(--good)]">
          Engine: ML Service (FastAPI) via Backend
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="cap-panel flex flex-col gap-4 rounded-2xl p-4"
        >
          <div>
            <div className="text-sm font-semibold tracking-tight text-white">
              Scenario inputs
            </div>
            <div className="text-xs text-[var(--muted)]">
              Define the end-game state. The ML engine will simulate thousands of paths.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1 text-xs">
              <label className="text-[var(--muted)]">Runs required</label>
              <input
                type="number"
                min={0}
                {...register('runsRequired', { valueAsNumber: true })}
                className="h-9 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="text-[var(--muted)]">Balls remaining</label>
              <input
                type="number"
                min={0}
                {...register('ballsRemaining', { valueAsNumber: true })}
                className="h-9 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="text-[var(--muted)]">Wickets in hand</label>
              <input
                type="number"
                min={0}
                max={10}
                {...register('wicketsRemaining', { valueAsNumber: true })}
                className="h-9 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <label className="text-[var(--muted)]">Batting order (comma separated)</label>
            <textarea
              rows={3}
              {...register('battingOrder')}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            />
          </div>

          <button
            type="submit"
            disabled={simulation.isPending || !formState.isValid}
            className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(124,92,255,0.25)] hover:opacity-95 transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            {simulation.isPending ? 'Running simulation…' : 'Run simulation'}
          </button>
        </form>

        <div className="cap-panel rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight text-white">
              Win probability
            </div>
            <div className="rounded-full bg-black/20 px-3 py-1 text-xs text-[var(--muted)]">
              Model output
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-3">
            <div className="relative h-32 w-32 rounded-full border-2 border-[var(--accent-2)]/70 bg-black/40">
              <div className="absolute inset-[18%] rounded-full bg-[var(--panel-2)]" />
              <div className="relative flex h-full flex-col items-center justify-center gap-1">
                <div className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                  Baseline
                </div>
                <div className="text-2xl font-semibold text-white">
                  {formatPercent(result.winProbability, 1)}
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--muted)] text-center">
              Probability of successful chase from the current state.
            </div>
          </div>
        </div>

        <WinProbabilityChart data={result.distribution} />
      </div>

      <div className="cap-panel rounded-2xl p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-tight text-white">
            Scenario comparison
          </div>
          <div className="text-xs text-[var(--muted)]">
            Change batting order and compare uplift.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 text-xs">
          {result.scenarios.map((s) => (
            <div
              key={s.scenario}
              className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/90"
            >
              <div className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                {s.scenario}
              </div>
              <div className="mt-2 text-lg font-semibold">
                {formatPercent(s.winProbability, 1)}
              </div>
              <div className="mt-1 text-[11px] text-[var(--muted)]">
                Modeled probability after 10k Monte Carlo simulations.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

