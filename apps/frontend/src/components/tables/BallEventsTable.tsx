import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';
import type { BallEvent } from '@/types/match.types';
import { Badge } from '@/components/ui/badge';

type BallEventsTableProps = {
  data: BallEvent[];
};

export function BallEventsTable({ data }: BallEventsTableProps) {
  const columns: Array<ColumnDef<BallEvent>> = [
    { 
      header: 'Inns', 
      accessorKey: 'innings',
      cell: (info) => <span className="text-muted-foreground text-xs font-mono">{String(info.getValue())}</span>
    },
    {
      header: 'Ball',
      cell: ({ row }) => (
        <span className="font-mono text-sm font-medium text-foreground">
          {row.original.over}.{row.original.ball}
        </span>
      ),
    },
    { 
      header: 'Team', 
      accessorKey: 'batting_team',
      cell: (info) => <span className="font-medium">{String(info.getValue())}</span>
    },
    { header: 'Batter', accessorKey: 'batter' },
    { header: 'Bowler', accessorKey: 'bowler' },
    {
      header: 'Runs',
      accessorKey: 'runs',
      cell: (info) => {
        const runs = Number(info.getValue());
        
        let variant = "outline";
        let className = "font-mono font-medium min-w-[24px] text-center justify-center";
        
        if (runs === 4) {
          className += " bg-blue-500/10 text-blue-500 border-blue-500/30";
        } else if (runs === 6) {
          className += " bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
        } else if (runs === 0) {
          className += " bg-muted/50 text-muted-foreground";
        }

        return (
          <Badge variant="outline" className={className}>
            {runs}
          </Badge>
        );
      },
    },
    {
      header: 'W',
      accessorKey: 'wicket',
      cell: (info) =>
        info.getValue() ? (
          <Badge variant="destructive" className="font-mono h-6 px-2 text-[10px] tracking-wider font-bold">
            OUT
          </Badge>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    },
  ];

  return (
    <DataTable
      title="Ball-by-ball Events"
      data={data}
      columns={columns}
      searchAccessor="batter"
      searchPlaceholder="Filter by batter..."
      pageSize={10}
    />
  );
}

