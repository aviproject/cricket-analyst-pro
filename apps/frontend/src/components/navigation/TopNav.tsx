'use client';

import Link from 'next/link';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/utils/helpers';

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TopNav() {
  const { sidebarCollapsed, setSidebarCollapsed } = useAppContext();

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/10 backdrop-blur">
      <div className="flex items-center gap-3 px-6 py-4">
        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={cn(
            'hidden md:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90',
            'hover:bg-white/8 transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50',
          )}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <IconMenu />
        </button>

        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold tracking-tight">
            Decision-grade cricket intelligence
          </div>
          <div className="text-xs text-[var(--muted)]">
            Match context, player form, and scenario simulation in one workspace
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/settings"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/8 transition"
          >
            Workspace
          </Link>
          <Link
            href="/auth/sign-in"
            className="rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-3 py-2 text-xs font-semibold text-black hover:opacity-95 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

