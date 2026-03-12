'use client';

import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

type AppContextValue = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: PropsWithChildren) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const value = useMemo(
    () => ({ sidebarCollapsed, setSidebarCollapsed }),
    [sidebarCollapsed],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContextProvider');
  return ctx;
}

