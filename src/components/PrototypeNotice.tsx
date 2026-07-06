import { Badge } from "./ui/badge";

export function PrototypeNotice() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <Badge tone="medium">Prototype</Badge>
      <span>This demo uses local mock logic only. No backend, no paid API, and no data leaves the browser.</span>
    </div>
  );
}
