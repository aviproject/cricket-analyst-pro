import { ReactNode } from 'react';

type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  icon?: ReactNode;
};

export function MetricCard({ label, value, delta, hint, icon }: MetricCardProps) {
  return (
    <div className="cap-panel rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {label}
          </div>
          <div className="mt-3 text-[26px] font-semibold tracking-tight text-white">
            {value}
          </div>
          <div className="mt-2 flex items-center gap-2">
            {delta ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/90">
                {delta}
              </span>
            ) : null}
            {hint ? <span className="text-[11px] text-[var(--muted)]">{hint}</span> : null}
          </div>
        </div>
        {icon ? (
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/20 text-white/90">
            {icon}
          </div>
        ) : null}
      </div>
    </div>
  );
}

