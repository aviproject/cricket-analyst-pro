export function SettingsContainer() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">Settings</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Configure the analyst workspace – environment, access, and defaults.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Data sources
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Backend → Supabase → ML service. Control environments and safety rails.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Environment: Production</li>
            <li>• Region: ap-south-1</li>
            <li>• Latency budget: &lt; 400ms p95</li>
          </ul>
        </section>

        <section className="cap-panel rounded-2xl p-4">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Default views
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Choose which dashboards and presets open first for analysts.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>• Default landing: Dashboard</li>
            <li>• Preferred phase: T20 end-game</li>
            <li>• Access: Coaches + analysts only</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

