import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { label: "GitHub", href: profile.githubUrl, icon: Github },
  { label: "LinkedIn", href: profile.linkedInUrl, icon: Linkedin },
  { label: "Email", href: profile.emailUrl, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{profile.name} Portfolio</p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
            Public product work, React prototypes, and practical PM thinking. Built with local mock data and no paid APIs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm text-slate-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
