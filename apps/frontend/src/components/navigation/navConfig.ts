import {
  IconDashboard,
  IconMatches,
  IconPlayers,
  IconReports,
  IconSettings,
  IconSimulation,
} from './icons';

export type NavItem = {
  href: string;
  label: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard', Icon: IconDashboard },
  { href: '/matches', label: 'Matches', Icon: IconMatches },
  { href: '/players', label: 'Players', Icon: IconPlayers },
  { href: '/simulation', label: 'Simulation Lab', Icon: IconSimulation },
  { href: '/reports', label: 'Tactical Reports', Icon: IconReports },
  { href: '/settings', label: 'Settings', Icon: IconSettings },
];

