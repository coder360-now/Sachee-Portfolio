import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";
import { ActionLink } from "./ActionLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/92 backdrop-blur">
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft" href="#main-content">
        Skip to main content
      </a>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="#home" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              S
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-950">{profile.name}</span>
              <span className="block text-xs text-muted-foreground">{profile.role}</span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-secondary hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:px-3"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
            <ActionLink external href={profile.githubUrl} variant="secondary" className="ml-2 shrink-0 px-3">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </ActionLink>
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="mt-3 grid gap-1 border-t border-slate-200 pt-3 lg:hidden">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-secondary hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <ActionLink external href={profile.githubUrl} variant="secondary" className="mt-2 w-full justify-center" onClick={closeMenu}>
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </ActionLink>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
