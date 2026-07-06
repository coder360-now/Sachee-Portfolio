import { Github } from "lucide-react";
import { ActionLink } from "../components/ActionLink";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { plannedRepos, profile } from "../data/portfolio";

export function GitHubShowcase() {
  return (
    <section id="github" className="scroll-mt-28 border-y border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              className="[&_h2]:text-white [&_p]:text-slate-300"
              eyebrow="GitHub showcase"
              title={`github.com/${profile.githubHandle}`}
              description="This space hosts hands-on product experiments, React prototypes, and AI-assisted PM tools that make product judgment visible."
            />
            <ActionLink external href={profile.githubUrl} className="mt-6 bg-white text-slate-950 hover:bg-slate-200">
              <Github className="h-4 w-4" aria-hidden="true" />
              Open GitHub profile
            </ActionLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {plannedRepos.map((repo) => (
              <Card key={repo.name} className="border-white/15 bg-white/[0.06] text-white shadow-none">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-white">{repo.name}</CardTitle>
                    <Badge tone={repo.status === "planned" ? "neutral" : "medium"}>{repo.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-300">{repo.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-normal text-slate-400">Repository not assumed to exist yet</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
