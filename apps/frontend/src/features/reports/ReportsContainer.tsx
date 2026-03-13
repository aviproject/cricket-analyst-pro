import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp, Target, Users, Zap } from "lucide-react";

export function ReportsContainer() {
  return (
    <div className="space-y-8 animate-fade-in-up pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-blue-500 border-blue-500/20 bg-blue-500/10 flex gap-1.5 items-center">
              <FileText className="w-3.5 h-3.5" />
              Intelligence Brief
            </Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground cap-gradient-text">
            Tactical Reports
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Curated match intelligence summarising turning points, player impact, and strategic recommendations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="cap-card-stat flex flex-col group">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Match insights</CardTitle>
              <CardDescription className="text-xs mt-0.5">High-level storyline of the contest</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span><strong className="text-foreground font-medium">Powerplay intent:</strong> Raised win probability by 18pp in overs 1–4.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span><strong className="text-foreground font-medium">Spin choke:</strong> Middle overs (7–12) conceded only 5 boundaries.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span><strong className="text-foreground font-medium">Death overs execution:</strong> Yorker execution rate of 72% vs baseline 58%.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="cap-card-stat flex flex-col group">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Key turning points</CardTitle>
              <CardDescription className="text-xs mt-0.5">Where win probability moved &gt; 10%</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="font-mono text-[10px] px-1.5 py-0 h-5 mt-0.5 shrink-0 text-amber-500 border-amber-500/30">15.2</Badge>
                <span>Wicket + dot reduced chase win probability from 54% to 38%.</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="font-mono text-[10px] px-1.5 py-0 h-5 mt-0.5 shrink-0 text-amber-500 border-amber-500/30">17.4</Badge>
                <span>Six over long-on lifted win probability by 12pp.</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="font-mono text-[10px] px-1.5 py-0 h-5 mt-0.5 shrink-0 text-amber-500 border-amber-500/30">19.5</Badge>
                <span>Boundary sealed chase with 96% win probability.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="cap-card-stat flex flex-col group">
          <CardHeader className="pb-4 border-b border-border/50 bg-muted/20 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Player impact</CardTitle>
              <CardDescription className="text-xs mt-0.5">Win probability change while on-field</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Finisher</span>
                  <span className="text-xs">34(14) vs death bowling</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10">+22%</Badge>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Spinner</span>
                  <span className="text-xs">Double-wicket over in middle</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10">+15%</Badge>
              </li>
              <li className="flex items-center justify-between gap-3 p-2 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Opener</span>
                  <span className="text-xs">Powerplay acceleration vs new ball</span>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10">+9%</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="cap-card-stat flex flex-col group border-accent/30 shadow-[0_0_15px_rgba(124,92,255,0.05)]">
          <CardHeader className="pb-4 border-b border-border/50 bg-accent/5 flex flex-row items-center gap-3 space-y-0">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold tracking-tight text-foreground">Strategic recommendations</CardTitle>
              <CardDescription className="text-xs mt-0.5">Actionable levers for future fixtures</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-5 flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 rounded bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-accent">1</span>
                </div>
                <span><strong className="text-foreground font-medium">Batting strategy:</strong> Promote finisher one spot earlier when runs/ball &gt; 1.9 after over 14.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 rounded bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-accent">2</span>
                </div>
                <span><strong className="text-foreground font-medium">Bowling rotation:</strong> Hold primary spinner for overs 7–11 on slow surfaces.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 rounded bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-accent">3</span>
                </div>
                <span><strong className="text-foreground font-medium">Death bowling:</strong> Deploy wide-yorker plan with third-man + deep-point for death overs.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

