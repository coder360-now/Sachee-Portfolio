import { ArrowRight, Github } from "lucide-react";
import heroImage from "../assets/hero-product-map.png";
import { ActionLink } from "../components/ActionLink";
import { metrics, profile } from "../data/portfolio";

const proofPoints = [
  "14 years in enterprise software",
  "Launched Native Webex Campaign Manager",
  "Led regulated product launches",
  "Built practical AI-assisted tools",
];

export function Home() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img alt="" className="h-full w-full object-cover opacity-70" src={heroImage} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.88)_34%,rgba(2,6,23,0.4)_72%,rgba(2,6,23,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,#020617_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:pb-14 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-teal-200">Sachee Choubey / Senior Product Manager</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            I lead complex enterprise products from customer need to launch and adoption.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{profile.headline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{profile.shortBio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="#case-studies" className="bg-teal-400 text-slate-950 hover:bg-teal-300">
              View case studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
            <ActionLink href="#demo-lab" className="border border-white/20 bg-white/10 text-white hover:bg-white/15">
              Try interactive demos
            </ActionLink>
            <ActionLink href="#blog" className="border border-white/20 bg-white/10 text-white hover:bg-white/15">
              Read product writing
            </ActionLink>
            <ActionLink external href={profile.githubUrl} className="bg-transparent text-teal-100 hover:bg-white/10">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub: {profile.githubHandle}
            </ActionLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span key={point} className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-sm text-slate-200">
                {point}
              </span>
            ))}
          </div>
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
