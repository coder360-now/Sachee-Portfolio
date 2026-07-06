import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/92",
  secondary: "border border-input bg-background text-foreground hover:bg-secondary",
  ghost: "text-primary hover:bg-secondary",
};

export function ActionLink({ children, className, external, variant = "primary", ...props }: ActionLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variants[variant],
        className,
      )}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {children}
      {external ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
