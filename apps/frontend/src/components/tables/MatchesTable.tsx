import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { DataTable } from './DataTable';
import type { Match } from '@/types/match.types';
import { formatDate } from '@/utils/formatters';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type MatchesTableProps = {
  data: Match[];
};

export function MatchesTable({ data }: MatchesTableProps) {
  const columns: Array<ColumnDef<Match>> = [
    {
      header: 'Date',
      accessorKey: 'date',
      cell: (info) => (
        <span className="text-muted-foreground">{formatDate(String(info.getValue()))}</span>
      ),
    },
    {
      header: 'Fixture',
      cell: ({ row }) => (
        <div className="min-w-0 flex items-center gap-3">
          {/* Subtle team colors indicator */}
          <div className="flex -space-x-1 shrink-0">
            <div className="w-3 h-3 rounded-full border border-background bg-blue-500" />
            <div className="w-3 h-3 rounded-full border border-background bg-amber-500" />
          </div>
          <div>
            <div className="truncate font-medium text-foreground">
              {row.original.home_team} <span className="text-muted-foreground font-normal mx-1">vs</span> {row.original.away_team}
            </div>
            <div className="truncate text-xs text-muted-foreground mt-0.5">{row.original.venue}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Result',
      accessorKey: 'result',
      cell: (info) => {
        const result = String(info.getValue() ?? '—');
        
        // Simple heuristic for badge color purely for demo aesthetics
        const isWin = result.toLowerCase().includes('won');
        const isTie = result.toLowerCase().includes('tie') || result.toLowerCase().includes('draw');

        if (result === '—') return <span className="text-muted-foreground">—</span>;

        return (
          <Badge 
            variant="outline" 
            className={
              isWin 
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                : isTie 
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
                  : "bg-muted/50 text-muted-foreground"
            }
          >
            {result}
          </Badge>
        );
      },
    },
    {
      header: '',
      id: 'link',
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Link
            href={`/matches/${row.original.id}`}
            className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors group-hover:translate-x-1 duration-200"
          >
            Match Center
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      title="Recent Matches"
      data={data}
      columns={columns}
      searchAccessor="venue"
      searchPlaceholder="Search venues..."
    />
  );
}

