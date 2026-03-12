export function formatPercent(v: number, digits = 0) {
  const pct = Math.max(0, Math.min(1, v)) * 100;
  return `${pct.toFixed(digits)}%`;
}

export function formatNumber(v: number) {
  return new Intl.NumberFormat('en-US').format(v);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d);
}

