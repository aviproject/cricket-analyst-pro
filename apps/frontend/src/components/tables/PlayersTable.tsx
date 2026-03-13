import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { DataTable } from './DataTable';
import type { Player } from '@/types/player.types';
import { ArrowRight, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type PlayersTableProps = {
  data: Player[];
};

export function PlayersTable({ data }: PlayersTableProps) {
  const columns: Array<ColumnDef<Player>> = [
    {
      header: 'Player',
      accessorKey: 'name',
      cell: (info) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center border border-border">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">{String(info.getValue())}</span>
        </div>
      ),
    },
    { 
      header: 'Role', 
      accessorKey: 'role',
      cell: (info) => {
        const role = String(info.getValue());
        const isBatter = role.toLowerCase().includes('batter') || role.toLowerCase().includes('batsman');
        const isBowler = role.toLowerCase().includes('bowler');
        const isAllRounder = role.toLowerCase().includes('all') && role.toLowerCase().includes('rounder');

        let variant = "default";
        if (isBatter) variant = "blue";
        if (isBowler) variant = "amber";
        if (isAllRounder) variant = "emerald";

        return (
          <Badge 
            variant="outline" 
            className={
              isBatter 
                ? "bg-blue-500/10 text-blue-500 border-blue-500/20" 
                : isBowler 
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
                  : isAllRounder
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                    : "bg-muted/50 text-muted-foreground"
            }
          >
            {role}
          </Badge>
        );
      }
    },
    { 
      header: 'Team', 
      accessorKey: 'team',
      cell: (info) => <span className="text-muted-foreground">{String(info.getValue())}</span>
    },
    {
      header: '',
      id: 'link',
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Link
            href={`/players/${row.original.id}`}
            className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors group-hover:translate-x-1 duration-200"
          >
            Profile
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      title="Player Directory"
      data={data}
      columns={columns}
      searchAccessor="name"
      searchPlaceholder="Search players..."
      pageSize={10}
    />
  );
}

