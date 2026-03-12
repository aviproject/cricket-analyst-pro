'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navConfig';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/utils/helpers';

export function SidebarNav() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useAppContext();

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] shadow-[0_10px_30px_rgba(124,92,255,0.25)]" />
        {!sidebarCollapsed ? (
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight">
              Cricket Analyst Pro
            </div>
            <div className="text-xs text-[var(--muted)]">Analytics Console</div>
          </div>
        ) : null}
      </div>

      <nav className="mt-2 flex flex-col gap-1">
        {navItems.map(({ href, label, Icon }) => {
          const isActive =
            href === '/'
              ? pathname === '/'
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
                isActive
                  ? 'bg-white/10 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]'
                  : 'text-white/80 hover:bg-white/7 hover:text-white',
              )}
            >
              <span
                className={cn(
                  'grid h-9 w-9 place-items-center rounded-xl border border-white/10 transition',
                  isActive
                    ? 'bg-white/8'
                    : 'bg-black/10 group-hover:bg-white/6',
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              {!sidebarCollapsed ? (
                <span className="min-w-0 truncate">{label}</span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-white/10 bg-black/10 p-3 text-xs text-[var(--muted)]">
        {!sidebarCollapsed ? (
          <>
            <div className="text-white/90 font-medium">Analyst workspace</div>
            <div className="mt-1 leading-5">
              Data-access via Backend → ML engine. Cache via React Query.
            </div>
          </>
        ) : (
          <div className="h-9" />
        )}
      </div>
    </div>
  );
}

