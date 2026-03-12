import { PlayerDetailContainer } from '@/features/players/PlayerDetailContainer';

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PlayerDetailContainer id={id} />;
}

