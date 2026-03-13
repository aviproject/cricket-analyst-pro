import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Database, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export function SettingsContainer() {
  return (
    <div className="space-y-8 animate-fade-in-up pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-muted-foreground border-border bg-muted flex gap-1.5 items-center">
              <Settings className="w-3.5 h-3.5" />
              System Configuration
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground cap-gradient-text">
            Settings
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Configure the analyst workspace – environment, access, and defaults.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="cap-card-stat flex flex-col group">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <Database className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Data sources</CardTitle>
              <CardDescription className="text-xs mt-0.5">Control environments and safety rails</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Environment</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" /> Production
                </Badge>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Region</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-black/20 px-2 py-0.5 rounded border border-white/5">ap-south-1</span>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Latency budget</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-black/20 px-2 py-0.5 rounded border border-white/5">&lt; 400ms p95</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="cap-card-stat flex flex-col group">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <SlidersHorizontal className="h-5 w-5 text-accent" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Default views</CardTitle>
              <CardDescription className="text-xs mt-0.5">Workspace defaults for analysts</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Landing Page</span>
                </div>
                <span className="text-sm text-muted-foreground">Dashboard</span>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Preferred Phase</span>
                </div>
                <span className="text-sm text-muted-foreground">T20 end-game</span>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Access level</span>
                </div>
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  Coaches + analysts
                </Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

