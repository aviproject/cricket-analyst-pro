import { useQuery } from '@tanstack/react-query';
import { getMatches, getMatchDetails } from '@/services/matches.service';

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: getMatches,
  });
}

export function useMatch(id: string) {
  return useQuery({
    queryKey: ['matches', id],
    queryFn: () => getMatchDetails(id),
    enabled: Boolean(id),
  });
}

