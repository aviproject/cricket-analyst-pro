'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/lib/utils';
import { Menu, Search, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';

export function TopNav() {
  const { sidebarCollapsed, setSidebarCollapsed } = useAppContext();
  const pathname = usePathname();

  // Simple breadcrumb logic based on pathname
  const getBreadcrumb = () => {
    if (pathname === '/') return 'Dashboard / Overview';
    const path = pathname.split('/').filter(Boolean);
    return path.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' / ');
  };

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-sidebar/90 backdrop-blur-xl">
      {/* Live Ticker Bar */}
      <div className="flex h-7 items-center overflow-hidden border-b border-border/50 bg-background/60 px-4 text-[11px] font-medium tracking-wide text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 pr-4 border-r border-border h-full shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e84638] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e84638]"></span>
          </span>
          <span className="text-[#e84638] font-semibold">LIVE</span>
        </div>
        <div className="flex-1 overflow-hidden relative mr-4">
          <div className="absolute whitespace-nowrap animate-[shimmer_20s_linear_infinite] flex gap-8">
            <span>IND 245/4 (42.1) vs AUS — Kohli 82* (94)</span>
            <span>ENG 188/10 (19.4) lost to SA 190/3 (18.2) — T20 World Cup</span>
            <span>NZ 320/8 (50.0) vs PAK — Williamson 112 (108)</span>
            {/* Duplicate for infinite loop effect */}
            <span>IND 245/4 (42.1) vs AUS — Kohli 82* (94)</span>
          </div>
        </div>
      </div>

      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>

          <div className="hidden md:flex flex-col">
            <h1 className="text-sm font-semibold tracking-tight text-foreground">
              {getBreadcrumb()}
            </h1>
            <p className="text-xs text-muted-foreground">
              Cricket Analyst Pro Workspace
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Global Search */}
          <div className="relative hidden sm:block w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search players, matches..."
              className="h-9 w-full bg-muted/50 border-border pl-9 text-sm placeholder:text-muted-foreground/60 focus-visible:ring-[#e84638]/40"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-muted/50">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#e84638] border-[1.5px] border-sidebar" />
          </Button>

          <Button variant="outline" size="icon" className="rounded-full h-9 w-9 border-border bg-muted/30 overflow-hidden hover:bg-muted/60">
            <User className="h-4 w-4 text-muted-foreground" />
          </Button>

          <div className="h-6 w-px bg-border mx-1 hidden sm:block" />

          <Link 
            href="/auth/sign-in" 
            className={cn(buttonVariants({ variant: 'default' }), "h-9 px-4 bg-[#e84638] hover:bg-[#d63830] text-white font-medium shadow-md shadow-[#e84638]/20")}
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
