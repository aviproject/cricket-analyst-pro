import { MatchDetailContainer } from '@/features/matches/MatchDetailContainer';

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <MatchDetailContainer id={id} />;
}

