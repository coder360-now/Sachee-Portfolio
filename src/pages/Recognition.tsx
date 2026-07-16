import { Award, CalendarDays, UserRound } from "lucide-react";
import awardImage from "../assets/sachee-codex-challenge-recognition.jpeg";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { recognition } from "../data/portfolio";

export function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Rewards and recognition"
          title="Recognition for practical AI experimentation."
          description="An award that reflects my belief in learning new technology by applying it to real product work."
        />

        <Card className="mt-10 overflow-hidden border-slate-200 bg-white">
          <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.15fr_0.85fr]">
            <figure className="bg-slate-100 p-4 sm:p-6">
              <img
                alt="Cisco Connected Recognition certificate for Sachee Choubey, named a Codex Challenge winner under the Think Really Big value on 2 July 2026"
                className="h-full w-full rounded-md border border-slate-200 bg-white object-contain shadow-sm"
                decoding="async"
                loading="lazy"
                src={awardImage}
              />
              <figcaption className="mt-3 text-sm leading-6 text-slate-600">
                Cisco Connected Recognition Program certificate presented on {recognition.date}.
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <Badge tone="success">{recognition.title}</Badge>
              <div className="mt-5 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-teal-700">Value recognized</p>
                  <h3 className="mt-1 text-3xl font-semibold text-slate-950">{recognition.value}</h3>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">{recognition.description}</p>
              <dl className="mt-6 grid gap-4 border-t border-slate-200 pt-6 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-950">Program</dt>
                  <dd className="mt-1 leading-6 text-slate-600">{recognition.issuer}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-medium text-slate-950">
                    <CalendarDays className="h-4 w-4 text-teal-600" aria-hidden="true" /> Date
                  </dt>
                  <dd className="mt-1 leading-6 text-slate-600">{recognition.date}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="flex items-center gap-2 font-medium text-slate-950">
                    <UserRound className="h-4 w-4 text-teal-600" aria-hidden="true" /> Recognized by
                  </dt>
                  <dd className="mt-1 leading-6 text-slate-600">{recognition.recognizedBy}</dd>
                </div>
              </dl>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
