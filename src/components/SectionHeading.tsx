import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ className, description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Badge tone="success">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}
