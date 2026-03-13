'use client';

import { PropsWithChildren } from 'react';
import { SidebarNav } from '@/components/navigation/SidebarNav';
import { TopNav } from '@/components/navigation/TopNav';
import { useAppContext } from '@/store/appContext';
import { cn } from '@/lib/utils'; // Switched to shadcn's cn utility

export function AppShell({ children }: PropsWithChildren) {
  const { sidebarCollapsed } = useAppContext();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            'hidden md:flex flex-col border-r border-sidebar-border bg-sidebar backdrop-blur-xl transition-all duration-300',
            sidebarCollapsed ? 'w-20' : 'w-64',
          )}
        >
          <SidebarNav />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <TopNav />
          <main className="min-w-0 flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1360px] space-y-6 animate-fade-in-up">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

