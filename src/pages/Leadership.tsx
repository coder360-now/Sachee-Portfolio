import { Target } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { capabilities, skillGroups } from "../data/portfolio";

export function Leadership() {
  return (
    <section id="work" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Product leadership and skills"
          title="Skills built across 14 years of enterprise product work."
          description="A quick view of the product, delivery, technical, analytical, domain, and leadership skills I use in my work."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-slate-950">How I apply these skills</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            These examples show how the skills above translate into product decisions, delivery, launches, and measurable results.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
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
