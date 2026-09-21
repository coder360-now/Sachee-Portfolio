import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import heroImage from "../assets/hero-product-map.png";
import { ActionLink } from "../components/ActionLink";
import { bestFit, metrics, profile } from "../data/portfolio";

const proofPoints = [
  "Digital Contact Center admin workflows",
  "Shipped: Native Webex Campaign Manager to GA",
  "Proof: 60+ paid subscriptions and 20+ active customers",
  "Range: enterprise SaaS, payments, GRC, and workflow automation",
];

export function Home() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img alt="" className="h-full w-full object-cover opacity-70" src={heroImage} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.98)_0%,rgba(7,17,31,0.9)_38%,rgba(7,17,31,0.42)_72%,rgba(7,17,31,0.85)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,#07111f_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:pb-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-amber-200">Sachee Choubey / Senior Product Manager</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              I turn messy enterprise workflows into products teams can launch, operate, and measure.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{profile.headline}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{profile.shortBio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href="#case-studies" className="bg-amber-300 text-slate-950 hover:bg-amber-200">
                View Cisco stories
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink href="#demo-lab" className="border border-white/20 bg-white/10 text-white hover:bg-white/15">
                Try PM demos
              </ActionLink>
              <ActionLink href={profile.emailUrl} className="border border-white/20 bg-white/10 text-white hover:bg-white/15">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Request resume
              </ActionLink>
              <ActionLink external href={profile.githubUrl} className="bg-transparent text-teal-100 hover:bg-white/10">
                <Github className="h-4 w-4" aria-hidden="true" />
                {profile.githubHandle}
              </ActionLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-sm text-slate-200">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <aside className="border-l border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur md:p-6" aria-label="Recruiter quick scan">
            <div className="flex items-center gap-2 text-amber-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-normal">Recruiter quick scan</p>
            </div>
            <div className="mt-5 grid gap-5">
              {bestFit.map((item) => (
                <div key={item.label} className="border-t border-white/[0.12] pt-4 first:border-t-0 first:pt-0">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-slate-950/74 p-5 backdrop-blur">
              <p className="text-2xl font-semibold text-teal-200">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
