import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ActionLink } from "../components/ActionLink";
import { SectionHeading } from "../components/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { profile } from "../data/portfolio";

const contactItems = [
  { label: "LinkedIn", href: profile.linkedInUrl, icon: Linkedin, external: true },
  { label: "GitHub profile", href: profile.githubUrl, icon: Github, external: true },
  { label: "Email", href: profile.emailUrl, icon: Mail },
  { label: "Request my resume", href: profile.resumeUrl, icon: Download },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss product leadership and enterprise software."
            description="I welcome conversations about senior product roles, product strategy, complex launches, workflow automation, and practical AI applications."
          />

          <Card className="border-slate-200 bg-white">
            <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  className="flex min-h-24 items-center gap-4 rounded-md border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href={item.href}
                  key={item.label}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                <p className="text-sm leading-6 text-slate-600">
                  The experience, case studies, demos, recognition, and writing above provide a clear view of how I lead product work.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ActionLink href="#case-studies">View case studies</ActionLink>
                  <ActionLink href="#demo-lab" variant="secondary">Try the demos</ActionLink>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
