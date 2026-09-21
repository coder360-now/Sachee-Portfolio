import { BookOpen, CheckCircle2, FileText, ListChecks, Route } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { caseStudies, proofArtifacts } from "../data/portfolio";

type StatusTone = "neutral" | "high" | "medium" | "low" | "success";

const getStatusTone = (status?: string): StatusTone => {
  if (!status) {
    return "neutral";
  }

  if (status.toLowerCase().includes("current")) {
    return "medium";
  }

  if (status.toLowerCase().includes("launch")) {
    return "success";
  }

  return "neutral";
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Product work with the decisions visible."
          description="Four examples across Cisco Digital Contact Center work, a shipped Cisco launch, automation, and regulated enterprise workflow products."
        />

        <div className="mt-8 border-y border-slate-200 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700">
                <FileText className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-normal">Proof artifacts</p>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                These are the kinds of sanitized artifacts I can discuss to show how I make product decisions concrete.
              </p>
            </div>
            <div className="flex max-w-3xl flex-wrap gap-2">
              {proofArtifacts.map((artifact) => (
                <Badge key={artifact} tone="success">
                  {artifact}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="overflow-hidden border-slate-200">
              <CardHeader className="border-b border-slate-200 bg-[#f8fafc]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" aria-hidden="true" />
                      <span className="text-sm font-medium text-teal-700">Case study</span>
                      {study.status ? <Badge tone={getStatusTone(study.status)}>{study.status}</Badge> : null}
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">{study.theme}</p>
                  </div>
                  <div className="flex max-w-xl flex-wrap gap-2">
                    {study.focusAreas.map((area) => (
                      <Badge key={area}>{area}</Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-7 p-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">Problem</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">My role</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{study.role}</p>
                  </div>
                  {study.timeline ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <Route className="h-4 w-4 text-amber-600" aria-hidden="true" />
                        <h3 className="text-sm font-semibold text-slate-950">Product path</h3>
                      </div>
                      <ol className="mt-3 grid gap-3">
                        {study.timeline.map((item) => (
                          <li key={`${study.title}-${item.label}`} className="border-l-2 border-amber-200 pl-3">
                            <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{item.label}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                </div>

                <div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">Key decisions</h3>
                    <ul className="mt-3 grid gap-3">
                      {study.decisions.map((decision) => (
                        <li key={decision} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.decisionLog ? (
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4 text-teal-600" aria-hidden="true" />
                        <h3 className="text-sm font-semibold text-slate-950">Decision log</h3>
                      </div>
                      <div className="mt-3 grid gap-3">
                        {study.decisionLog.map((item) => (
                          <div key={`${study.title}-${item.decision}`} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                            <p className="text-sm font-semibold text-slate-950">{item.decision}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{item.why}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-slate-200 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-950">Results</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{study.outcome}</p>
                    </div>
                    <div className="rounded-md border border-slate-200 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-950">What I learned</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{study.learned}</p>
                    </div>
                  </div>

                  {study.artifacts ? (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-950">Artifacts I would bring to an interview</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.artifacts.map((artifact) => (
                          <Badge key={`${study.title}-${artifact}`} tone="low">
                            {artifact}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
