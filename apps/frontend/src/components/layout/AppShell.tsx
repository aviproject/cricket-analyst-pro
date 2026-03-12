'use client';

import { PropsWithChildren } from 'react';
import { SidebarNav } from '@/components/navigation/SidebarNav';
import { TopNav } from '@/components/navigation/TopNav';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/utils/helpers';

export function AppShell({ children }: PropsWithChildren) {
  const { sidebarCollapsed } = useAppContext();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            'hidden md:block border-r border-white/10 bg-black/20/60 backdrop-blur-xl',
            sidebarCollapsed ? 'w-[76px]' : 'w-[260px]',
          )}
        >
          <SidebarNav />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <TopNav />
          <main className="min-w-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="mx-auto max-w-6xl space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

