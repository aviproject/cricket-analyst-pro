import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { DataTable } from './DataTable';
import type { Player } from '@/types/player.types';

type PlayersTableProps = {
  data: Player[];
};

export function PlayersTable({ data }: PlayersTableProps) {
  const columns: Array<ColumnDef<Player>> = [
    {
      header: 'Player',
      accessorKey: 'name',
      cell: (info) => <span className="font-medium text-white/90">{String(info.getValue())}</span>,
    },
    { header: 'Role', accessorKey: 'role' },
    { header: 'Team', accessorKey: 'team' },
    {
      header: '',
      id: 'link',
      cell: ({ row }) => (
        <Link
          href={`/players/${row.original.id}`}
          className="text-xs font-semibold text-[var(--accent-2)] hover:underline"
        >
          Open
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      title="Players"
      data={data}
      columns={columns}
      searchAccessor="name"
      searchPlaceholder="Search players…"
      pageSize={10}
    />
  );
}

