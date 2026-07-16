import { aboutParagraphs, experienceChapters, operatingStyle } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Career and principles"
          title="Senior product leadership built on enterprise workflow experience."
          description="My career spans product management, business analysis, implementation, and support across complex enterprise software."
        />

        <div className="grid gap-6">
          <div className="space-y-4 text-base leading-7 text-slate-600">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {operatingStyle.map((item) => (
              <Card key={item.title} className="border-slate-200">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">Professional experience</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">Four companies. One progression toward product leadership.</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Experience across contact centers, commodity trading, financial operations, payments, governance and risk, integrations, and automation.
            </p>
          </div>

          <div className="mt-6 grid gap-5">
            {experienceChapters.map((chapter, index) => (
              <div key={chapter.company} className="grid gap-4 rounded-md border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[0.28fr_0.72fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">0{index + 1} / {chapter.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-950">{chapter.company}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{chapter.role}</p>
                </div>
                <div>
                  <p className="text-sm leading-6 text-slate-700">{chapter.focus}</p>
                  <ul className="mt-3 grid gap-2">
                    {chapter.proof.map((proof) => (
                      <li key={proof} className="text-sm leading-6 text-slate-600">
                        - {proof}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
