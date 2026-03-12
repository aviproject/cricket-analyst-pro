import { useQuery } from '@tanstack/react-query';
import { getPlayers, getPlayerDetails } from '@/services/players.service';

export function usePlayers() {
  return useQuery({
    queryKey: ['players'],
    queryFn: getPlayers,
  });
}

export function usePlayer(id: string) {
  return useQuery({
    queryKey: ['players', id],
    queryFn: () => getPlayerDetails(id),
    enabled: Boolean(id),
  });
}

