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
import { cn } from '@/utils/helpers';

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
    <div className="cap-panel rounded-2xl p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold tracking-tight text-white">{title}</div>
          <div className="text-xs text-[var(--muted)]">
            Sorted, filterable, and analyst-friendly
          </div>
        </div>
        {searchAccessor ? (
          <input
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={searchPlaceholder}
            className={cn(
              'h-9 w-[240px] rounded-xl border border-white/10 bg-black/10 px-3 text-sm text-white placeholder:text-white/35',
              'focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40',
            )}
          />
        ) : null}
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-xs text-white/70">
            {headerGroups.map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => {
                  const canSort = h.column.getCanSort();
                  const sort = h.column.getIsSorted();
                  return (
                    <th
                      key={h.id}
                      className={cn(
                        'px-4 py-3 font-medium',
                        canSort ? 'cursor-pointer select-none hover:bg-white/5' : '',
                      )}
                      onClick={canSort ? h.column.getToggleSortingHandler() : undefined}
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(h.column.columnDef.header, h.getContext())}
                        {sort ? (
                          <span className="text-[10px] text-white/60">
                            {sort === 'asc' ? '▲' : '▼'}
                          </span>
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-white/8">
            {rows.map((row) => (
              <tr
                key={row.id}
                onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                className={cn(
                  'text-white/90',
                  onRowClick ? 'cursor-pointer hover:bg-white/4' : '',
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-[var(--muted)]">
        <div>
          Showing{' '}
          <span className="text-white/80">
            {table.getState().pagination.pageIndex * pageSize + 1}–
            {table.getState().pagination.pageIndex * pageSize + rows.length}
          </span>{' '}
          of <span className="text-white/80">{table.getFilteredRowModel().rows.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/8 transition disabled:opacity-40"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </button>
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/8 transition disabled:opacity-40"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

