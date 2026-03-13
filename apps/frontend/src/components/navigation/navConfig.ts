import {
  IconDashboard,
  IconMatches,
  IconPlayers,
  IconReports,
  IconSettings,
  IconSimulation,
} from './icons';

import type React from 'react';

export type NavItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<any>;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', Icon: IconDashboard },
  { href: '/matches', label: 'Matches', Icon: IconMatches },
  { href: '/players', label: 'Players', Icon: IconPlayers },
  { href: '/simulation', label: 'Simulation Lab', Icon: IconSimulation },
  { href: '/reports', label: 'Tactical Reports', Icon: IconReports },
  { href: '/settings', label: 'Settings', Icon: IconSettings },
];

