'use client';

import { useForm } from 'react-hook-form';
import { useSimulation } from '@/hooks/useSimulation';
import type { SimulationInput } from '@/types/simulation.types';
import { WinProbabilityChart } from '@/components/charts/WinProbabilityChart';
import { formatPercent } from '@/utils/formatters';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Play } from 'lucide-react';

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
    <div className="space-y-8 animate-fade-in-up pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10 flex gap-1.5 items-center">
              <BrainCircuit className="w-3.5 h-3.5" />
              ML Service Engine Active
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground cap-gradient-text">
            Simulation Lab
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Model end-game scenarios and understand how batting order, risk, and tempo impact
            win probability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Input Form */}
        <Card className="cap-card-stat flex flex-col">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20">
            <CardTitle className="text-base font-semibold tracking-tight text-foreground">Scenario Inputs</CardTitle>
            <CardDescription className="text-xs mt-1">
              Define the end-game state. The ML engine will simulate 10k Monte Carlo paths.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex flex-col h-full">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="runsRequired" className="text-xs text-muted-foreground">Runs required</Label>
                  <Input
                    id="runsRequired"
                    type="number"
                    min={0}
                    {...register('runsRequired', { valueAsNumber: true })}
                    className="h-10 text-sm bg-muted/50 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ballsRemaining" className="text-xs text-muted-foreground">Balls remain</Label>
                  <Input
                    id="ballsRemaining"
                    type="number"
                    min={0}
                    {...register('ballsRemaining', { valueAsNumber: true })}
                    className="h-10 text-sm bg-muted/50 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wicketsRemaining" className="text-xs text-muted-foreground">Wickets (10)</Label>
                  <Input
                    id="wicketsRemaining"
                    type="number"
                    min={0}
                    max={10}
                    {...register('wicketsRemaining', { valueAsNumber: true })}
                    className="h-10 text-sm bg-muted/50 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                <Label htmlFor="battingOrder" className="text-xs text-muted-foreground">Batting order (comma separated)</Label>
                <textarea
                  id="battingOrder"
                  rows={4}
                  {...register('battingOrder')}
                  className="flex w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Finisher, Anchor, Power-hitter..."
                />
              </div>

              <Button
                type="submit"
                disabled={simulation.isPending || !formState.isValid}
                className="w-full mt-auto h-11 bg-accent hover:bg-accent/90 text-white font-medium shadow-sm shadow-accent/20"
              >
                {simulation.isPending ? 'Running simulation…' : (
                  <span className="flex items-center gap-2">
                    <Play className="h-4 w-4 fill-current" />
                    Run Simulation
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Win Probability Dial */}
        <Card className="cap-card-stat flex flex-col justify-center items-center text-center">
          <CardHeader className="w-full pb-0 text-left border-b border-border/50 bg-muted/20">
            <div className="flex items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base font-semibold tracking-tight text-foreground">Win Probability</CardTitle>
                <div className="text-xs text-muted-foreground mt-1 text-left">
                  Model Output
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6 flex-1 w-full">
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <div className="relative h-40 w-40 rounded-full border-[6px] border-accent/20 bg-card shadow-inner flex items-center justify-center">
                {/* Circular indicator trace */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="74"
                    cy="74"
                    r="68"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="6"
                    strokeDasharray="427"
                    strokeDashoffset={427 - (427 * result.winProbability)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="relative flex h-full flex-col items-center justify-center gap-1 z-10">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                    Baseline
                  </div>
                  <div className="text-4xl font-bold font-mono tracking-tighter text-foreground cap-gradient-text animate-pulse">
                    {formatPercent(result.winProbability, 1)}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-[200px] leading-relaxed">
                Probability of successful chase from the current state.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Win Probability Chart Component */}
        <WinProbabilityChart data={result.distribution} />
      </div>

      <div className="flex items-center gap-4 cap-divider mt-8 mb-6">
        <span>Scenario Comparison Analysis</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {result.scenarios.map((s) => (
          <Card key={s.scenario} className="cap-card-stat group hover:border-accent/50 transition-colors">
            <CardContent className="p-5">
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground flex justify-between items-center">
                <span>{s.scenario}</span>
                {s.scenario !== 'Baseline' && (
                  <Badge variant="outline" className={s.winProbability > result.winProbability ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/10" : "text-amber-500 border-amber-500/20 bg-amber-500/10"}>
                    {s.winProbability > result.winProbability ? '+' : ''}{((s.winProbability - result.winProbability) * 100).toFixed(1)}%
                  </Badge>
                )}
              </div>
              <div className="mt-3 text-3xl font-bold font-mono tracking-tight text-foreground">
                {formatPercent(s.winProbability, 1)}
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Modeled probability after 10k Monte Carlo simulations with changed strategy.
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

