import { BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { caseStudies } from "../data/portfolio";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Selected product work and results."
          description="Three examples showing the problem, my role, the decisions I led, the results, and what I learned."
        />

        <div className="mt-10 grid gap-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="overflow-hidden border-slate-200">
              <CardHeader className="border-b border-slate-200 bg-slate-50">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" aria-hidden="true" />
                      <span className="text-sm font-medium text-teal-700">Case study</span>
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
              <CardContent className="grid gap-6 pt-6 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-semibold text-slate-950">Problem</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.problem}</p>
                  <h3 className="mt-5 text-sm font-semibold text-slate-950">My role</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.role}</p>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-sm font-semibold text-slate-950">Key decisions</h3>
                  <ul className="mt-3 grid gap-3">
                    {study.decisions.map((decision) => (
                      <li key={decision} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-slate-200 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-950">Results</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{study.outcome}</p>
                    </div>
                    <div className="rounded-md border border-slate-200 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-950">What I learned</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{study.learned}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
