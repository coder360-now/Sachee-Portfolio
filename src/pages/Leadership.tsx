import { Target } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { capabilities } from "../data/portfolio";

export function Leadership() {
  return (
    <section id="work" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Product leadership"
          title="The PM capabilities I want this portfolio to make visible."
          description="This section is intentionally framed around product behavior and operating habits, not buzzwords."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Card key={capability.title} className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-teal-200">
                    0{index + 1}
                  </span>
                  <div>
                    <Target className="mb-3 h-5 w-5 text-teal-600" aria-hidden="true" />
                    <CardTitle>{capability.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{capability.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capability.signals.map((signal) => (
                    <Badge key={signal}>{signal}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
