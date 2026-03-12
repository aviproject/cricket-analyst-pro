import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';
import type { BallEvent } from '@/types/match.types';

type BallEventsTableProps = {
  data: BallEvent[];
};

export function BallEventsTable({ data }: BallEventsTableProps) {
  const columns: Array<ColumnDef<BallEvent>> = [
    { header: 'Inns', accessorKey: 'innings' },
    {
      header: 'Ball',
      cell: ({ row }) => `${row.original.over}.${row.original.ball}`,
    },
    { header: 'Team', accessorKey: 'batting_team' },
    { header: 'Batter', accessorKey: 'batter' },
    { header: 'Bowler', accessorKey: 'bowler' },
    {
      header: 'Runs',
      accessorKey: 'runs',
      cell: (info) => (
        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/90">
          {String(info.getValue())}
        </span>
      ),
    },
    {
      header: 'W',
      accessorKey: 'wicket',
      cell: (info) =>
        info.getValue() ? <span className="text-[var(--bad)] font-semibold">●</span> : '—',
    },
  ];

  return (
    <DataTable
      title="Ball-by-ball Events"
      data={data}
      columns={columns}
      searchAccessor="batter"
      searchPlaceholder="Filter by batter…"
      pageSize={10}
    />
  );
}

