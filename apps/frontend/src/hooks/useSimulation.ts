import { useMutation } from '@tanstack/react-query';
import { runSimulation } from '@/services/simulation.service';
import type { SimulationInput } from '@/types/simulation.types';

export function useSimulation() {
  return useMutation({
    mutationFn: (input: SimulationInput) => runSimulation(input),
  });
}

