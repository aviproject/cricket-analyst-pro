'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type DataTableProps<T> = {
  title: string;
  data: T[];
  columns: Array<ColumnDef<T, any>>;
  searchPlaceholder?: string;
  searchAccessor?: keyof T;
  pageSize?: number;
  onRowClick?: (row: T) => void;
};

export function DataTable<T extends object>({
  title,
  data,
  columns,
  searchPlaceholder = 'Search…',
  searchAccessor,
  pageSize = 8,
  onRowClick,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, _columnId, filterValue) => {
      if (!searchAccessor) return true;
      const v = row.original[searchAccessor];
      return String(v ?? '').toLowerCase().includes(String(filterValue).toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  });

  const headerGroups = useMemo(() => table.getHeaderGroups(), [table]);
  const rows = useMemo(() => table.getRowModel().rows, [table]);

  return (
    <Card className="cap-card-stat">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold tracking-tight text-foreground">{title}</CardTitle>
          <CardDescription className="text-xs mt-1">
            Sorted, filterable, and analyst-friendly
          </CardDescription>
        </div>
        {searchAccessor && (
          <div className="relative w-full sm:w-[260px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={searchPlaceholder}
              className="pl-9 h-9"
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/30">
            {headerGroups.map((hg) => (
              <TableRow key={hg.id} className="hover:bg-transparent">
                {hg.headers.map((h) => {
                  const canSort = h.column.getCanSort();
                  const sort = h.column.getIsSorted();
                  return (
                    <TableHead
                      key={h.id}
                      className={cn(
                        'h-10 py-2',
                        canSort && 'cursor-pointer select-none'
                      )}
                      onClick={canSort ? h.column.getToggleSortingHandler() : undefined}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {flexRender(h.column.columnDef.header, h.getContext())}
                        {sort && (
                          <span className="text-accent flex items-center">
                            {sort === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                          </span>
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  className={cn(
                    'transition-colors group',
                    onRowClick && 'cursor-pointer hover:bg-muted/30'
                  )}
                >
                  {row.getVisibleCells().map((cell, idx) => (
                    <TableCell 
                      key={cell.id} 
                      className={cn(
                        "py-3 font-medium",
                        idx === 0 && onRowClick && "relative before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-accent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity"
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/20 text-xs text-muted-foreground">
          <div>
            Showing{' '}
            <span className="font-medium text-foreground">
              {table.getState().pagination.pageIndex * pageSize + 1}–
              {Math.min((table.getState().pagination.pageIndex + 1) * pageSize, table.getFilteredRowModel().rows.length)}
            </span>{' '}
            of <span className="font-medium text-foreground">{table.getFilteredRowModel().rows.length}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="h-8 shadow-sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 shadow-sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

