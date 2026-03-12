import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { DataTable } from './DataTable';
import type { Match } from '@/types/match.types';
import { formatDate } from '@/utils/formatters';

type MatchesTableProps = {
  data: Match[];
};

export function MatchesTable({ data }: MatchesTableProps) {
  const columns: Array<ColumnDef<Match>> = [
    {
      header: 'Date',
      accessorKey: 'date',
      cell: (info) => formatDate(String(info.getValue())),
    },
    {
      header: 'Fixture',
      cell: ({ row }) => (
        <div className="min-w-0">
          <div className="truncate font-medium text-white/90">
            {row.original.home_team} vs {row.original.away_team}
          </div>
          <div className="truncate text-xs text-[var(--muted)]">{row.original.venue}</div>
        </div>
      ),
    },
    {
      header: 'Result',
      accessorKey: 'result',
      cell: (info) => (
        <span className="text-white/80">{String(info.getValue() ?? '—')}</span>
      ),
    },
    {
      header: '',
      id: 'link',
      cell: ({ row }) => (
        <Link
          href={`/matches/${row.original.id}`}
          className="text-xs font-semibold text-[var(--accent-2)] hover:underline"
        >
          Open
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      title="Recent Matches"
      data={data}
      columns={columns}
      searchAccessor="venue"
      searchPlaceholder="Filter by venue…"
    />
  );
}

