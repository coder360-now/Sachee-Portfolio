import { Badge } from "./ui/badge";

export function PrototypeNotice() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <Badge tone="medium">Interactive prototype</Badge>
      <span>Uses sample data and rule-based logic in your browser. Nothing is uploaded.</span>
    </div>
  );
}
