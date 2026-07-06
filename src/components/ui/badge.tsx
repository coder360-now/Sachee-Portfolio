import * as React from "react";
import { cn } from "../../lib/utils";

type BadgeTone = "neutral" | "high" | "medium" | "low" | "success";

const tones: Record<BadgeTone, string> = {
  neutral: "border-slate-200 bg-slate-50 text-slate-700",
  high: "border-red-200 bg-red-50 text-red-700",
  medium: "border-amber-200 bg-amber-50 text-amber-700",
  low: "border-sky-200 bg-sky-50 text-sky-700",
  success: "border-teal-200 bg-teal-50 text-teal-700",
};

export const Badge = ({
  className,
  tone = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) => (
  <span
    className={cn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium", tones[tone], className)}
    {...props}
  />
);
