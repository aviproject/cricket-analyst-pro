'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navConfig';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react'; // Using lucide for the pulse icon

export function SidebarNav() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useAppContext();

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      {/* Header / Logo */}
      <div className="flex items-center gap-3 px-2 py-3 mb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e84638] to-[#f59e0b] shadow-lg shadow-[#e84638]/20 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2 C 8 8, 16 16, 12 22" />
          </svg>
        </div>
        {!sidebarCollapsed && (
          <div className="min-w-0 animate-fade-in truncate">
            <div className="truncate text-sm font-bold tracking-tight text-foreground">
              Cricket Analyst Pro
            </div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Season 2026 Live
            </div>
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="h-px bg-sidebar-border mx-2" />

      {/* Navigation */}
      <nav className="flex flex-col gap-1 mt-1">
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
                'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 relative',
                isActive
                  ? 'bg-[#e84638]/10 text-white'
                  : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-[#e84638]" />
              )}
              <span
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                  isActive ? 'text-[#e84638]' : 'text-muted-foreground group-hover:text-foreground',
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              {!sidebarCollapsed && <span className="min-w-0 truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto">
        {!sidebarCollapsed ? (
          <div className="rounded-xl border border-sidebar-border bg-[#080e24] p-4 text-xs">
            <div className="font-semibold mb-2 flex items-center gap-2 text-foreground">
              <Activity className="h-3.5 w-3.5 text-emerald-500" />
              System Status
            </div>
            <div className="flex flex-col gap-1.5 text-muted-foreground">
              <div className="flex justify-between">
                <span>API Latency</span>
                <span className="text-emerald-500 font-medium">42ms</span>
              </div>
              <div className="flex justify-between">
                <span>ML Engine</span>
                <span className="text-emerald-500 font-medium">Online</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-9" />
        )}
      </div>
    </div>
  );
}
