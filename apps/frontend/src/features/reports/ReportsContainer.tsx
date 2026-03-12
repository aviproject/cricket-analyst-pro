export function ReportsContainer() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Tactical reports
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Curated match intelligence summarising turning points, player impact, and strategic
          recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Match insights
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            High-level storyline of the contest with momentum swings.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Powerplay intent raised win probability by 18pp in overs 1–4.</li>
            <li>• Spin choke in middle overs (7–12) conceded only 5 boundaries.</li>
            <li>• Death overs execution: yorker execution rate of 72% vs baseline 58%.</li>
          </ul>
        </section>

        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Key turning points
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Balls where win probability moved &gt; 10 percentage points.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Over 15.2 – wicket + dot reduced chase win probability from 54% to 38%.</li>
            <li>• Over 17.4 – six over long-on lifted win probability by 12pp.</li>
            <li>• Over 19.5 – boundary sealed chase with 96% win probability.</li>
          </ul>
        </section>

        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Player impact
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Contribution measured by change in win probability while on-field.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Finisher: +22pp impact with 34(14) against death bowling.</li>
            <li>• Spinner: +15pp impact with double-wicket over in middle phase.</li>
            <li>• Opener: +9pp impact with powerplay acceleration against new ball.</li>
          </ul>
        </section>

        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Strategic recommendations
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Actionable levers for future fixtures on similar surfaces.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Promote finisher one spot earlier when runs/ball &gt; 1.9 after over 14.</li>
            <li>• Hold primary spinner for overs 7–11 on slow surfaces.</li>
            <li>• Deploy wide-yorker plan with third-man + deep-point for death overs.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

