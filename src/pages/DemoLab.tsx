import { useMemo, useState, type ReactElement } from "react";
import { BarChart3, CheckCircle2, FlaskConical, ListChecks, MapPinned, MessageSquareText, SearchCheck } from "lucide-react";
import { PrototypeNotice } from "../components/PrototypeNotice";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { demos, type DemoSummary } from "../data/portfolio";

type DemoId = DemoSummary["id"];

const demoIcons: Record<DemoId, typeof SearchCheck> = {
  prd: SearchCheck,
  signals: MessageSquareText,
  launch: ListChecks,
  mapper: MapPinned,
  roadmap: BarChart3,
};

const samplePrd = `Problem: Product managers need a faster way to review early requirement drafts before cross-functional reviews.
Target users: Product managers and engineering leads preparing for planning.
Scope: Check clarity, risks, dependencies, success metrics, and launch readiness.
Success metrics: Faster review cycles and fewer open questions in product requirement reviews.
Risks: Rule-based checks can miss domain-specific context and should not replace product judgment.
Dependencies: Design review, analytics event naming, sales and marketing training, support readiness, and release notes.`;

function buildPrdReport(text: string) {
  const lower = text.toLowerCase();
  const checks = [
    { label: "Problem clarity", keywords: ["problem", "customer", "user"], suggestion: "State the customer pain and target user more explicitly." },
    { label: "Scope boundaries", keywords: ["scope", "out of scope", "mvp"], suggestion: "Add crisp in-scope and out-of-scope boundaries." },
    { label: "Risks", keywords: ["risk", "constraint", "tradeoff"], suggestion: "List risks, constraints, and review owners." },
    { label: "Dependencies", keywords: ["dependency", "dependencies", "design", "analytics"], suggestion: "Name engineering, design, analytics, sales, marketing, and support dependencies." },
    { label: "Success metrics", keywords: ["metric", "success", "adoption", "conversion"], suggestion: "Define measurable success signals and a review window." },
    { label: "Launch readiness", keywords: ["launch", "beta", "ga", "support", "docs"], suggestion: "Add launch stage, docs, support, enablement, and rollout criteria." },
  ];

  return checks.map((check) => {
    const found = check.keywords.some((keyword) => lower.includes(keyword));
    return {
      ...check,
      status: found ? "Healthy" : "Needs attention",
    };
  });
}

function PrdHealthChecker() {
  const [text, setText] = useState(samplePrd);
  const [report, setReport] = useState(() => buildPrdReport(samplePrd));
  const healthyCount = report.filter((item) => item.status === "Healthy").length;

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Paste product requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            aria-describedby="prd-input-limit"
            aria-label="Product requirements text"
            maxLength={12000}
          />
          <p className="mt-2 text-right text-xs text-slate-500" id="prd-input-limit">
            {text.length.toLocaleString()} / 12,000 characters. Text stays in this browser.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={() => setReport(buildPrdReport(text))}>Analyze</Button>
            <Button variant="secondary" onClick={() => setText(samplePrd)}>
              Load sample
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Requirements review</CardTitle>
          <p className="text-sm text-slate-600">{healthyCount} of {report.length} checks look healthy in this local pass.</p>
        </CardHeader>
        <CardContent className="grid gap-3">
          {report.map((item) => (
            <div key={item.label} className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-slate-950">{item.label}</h4>
                <Badge tone={item.status === "Healthy" ? "success" : "medium"}>{item.status}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.status === "Healthy" ? "Signal found in the draft." : item.suggestion}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const feedbackItems = [
  {
    id: "f1",
    text: "Admins want clearer controls before enabling outbound campaigns for regulated teams.",
    theme: "Governance",
    urgency: "High",
    area: "Campaign setup",
    action: "Clarify permissions, approval flow, and audit expectations.",
  },
  {
    id: "f2",
    text: "Support teams keep asking whether failed contact imports can be retried in bulk.",
    theme: "Operational reliability",
    urgency: "Medium",
    area: "Contact lists",
    action: "Add retry states and failure-reporting requirements to backlog review.",
  },
  {
    id: "f3",
    text: "Sales needs a simple way to explain beta limitations without overpromising full-launch behavior.",
    theme: "Launch readiness",
    urgency: "Medium",
    area: "Sales and marketing training",
    action: "Prepare beta messaging, FAQ, and supported-use-case boundaries.",
  },
  {
    id: "f4",
    text: "Customers want analytics that show campaign outcomes by segment and follow-up status.",
    theme: "Measurement",
    urgency: "High",
    area: "Reporting",
    action: "Define adoption and outcome metrics with analytics and customer-facing teams.",
  },
];

function CustomerSignalTriage() {
  const [selected, setSelected] = useState<Record<string, boolean>>(() => Object.fromEntries(feedbackItems.map((item) => [item.id, true])));
  const [showResult, setShowResult] = useState(true);
  const activeItems = feedbackItems.filter((item) => selected[item.id]);
  const themes = useMemo(() => {
    return activeItems.reduce<Record<string, typeof feedbackItems>>((groups, item) => {
      groups[item.theme] = [...(groups[item.theme] ?? []), item];
      return groups;
    }, {});
  }, [activeItems]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Sample customer signals</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {feedbackItems.map((item) => (
            <label key={item.id} className="flex gap-3 rounded-md border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
              <input
                checked={Boolean(selected[item.id])}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-ring"
                onChange={(event) => {
                  setSelected((current) => ({ ...current, [item.id]: event.target.checked }));
                  setShowResult(false);
                }}
                type="checkbox"
              />
              <span>{item.text}</span>
            </label>
          ))}
          <Button onClick={() => setShowResult(true)}>Run triage</Button>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Triage result</CardTitle>
          <p className="text-sm text-slate-600">{activeItems.length} selected feedback items grouped into product themes.</p>
        </CardHeader>
        <CardContent className="grid gap-3">
          {!showResult ? <p className="rounded-md bg-slate-50 p-4 text-sm text-slate-600">Run triage again to refresh the grouped output.</p> : null}
          {showResult && Object.entries(themes).map(([theme, items]) => (
            <div key={theme} className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-slate-950">{theme}</h4>
                <Badge tone={items.some((item) => item.urgency === "High") ? "high" : "medium"}>{items.length} signal{items.length > 1 ? "s" : ""}</Badge>
              </div>
              <div className="mt-3 grid gap-3">
                {items.map((item) => (
                  <div key={item.id} className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">{item.area} / {item.urgency} urgency</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const checklistGroups = [
  { id: "product", title: "Product", items: ["Scope locked", "Beta or full-launch criteria defined", "Known limitations documented"] },
  { id: "engineering", title: "Engineering", items: ["Monitoring ready", "Rollback path reviewed", "Critical defects triaged"] },
  { id: "support", title: "Support", items: ["Support playbook drafted", "Escalation path named", "FAQ reviewed"] },
  { id: "sales", title: "Sales", items: ["Positioning approved", "Demo boundaries clear", "Objection handling prepared"] },
  { id: "docs", title: "Docs", items: ["User docs drafted", "Release notes prepared", "Admin setup steps checked"] },
  { id: "compliance", title: "Compliance", items: ["Data handling reviewed", "Permissions tested", "Audit expectations captured"] },
  { id: "analytics", title: "Analytics", items: ["Events named", "Dashboard owner assigned", "Adoption review date set"] },
];

function LaunchReadinessChecklist() {
  const allIds = checklistGroups.flatMap((group) => group.items.map((item) => `${group.id}:${item}`));
  const [checked, setChecked] = useState<Record<string, boolean>>(() => Object.fromEntries(allIds.slice(0, 6).map((id) => [id, true])));
  const completed = allIds.filter((id) => checked[id]).length;
  const progress = Math.round((completed / allIds.length) * 100);

  return (
    <div className="grid gap-5">
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Readiness score</CardTitle>
              <p className="mt-2 text-sm text-slate-600">{completed} of {allIds.length} launch items complete.</p>
            </div>
            <Badge tone={progress >= 80 ? "success" : progress >= 50 ? "medium" : "high"}>{progress}% ready</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <progress className="readiness-progress h-3 w-full overflow-hidden rounded-full" max={100} value={progress}>
            {progress}%
          </progress>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {checklistGroups.map((group) => (
          <Card key={group.id} className="border-slate-200">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {group.items.map((item) => {
                const id = `${group.id}:${item}`;
                return (
                  <label key={id} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <input
                      checked={Boolean(checked[id])}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-ring"
                      onChange={(event) => setChecked((current) => ({ ...current, [id]: event.target.checked }))}
                      type="checkbox"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const industryUseCases = {
  Healthcare: [
    "Appointment reminders and missed-visit follow-up",
    "Care program outreach with consent-aware controls",
    "Post-interaction quality signals for service teams",
  ],
  Banking: [
    "Collections outreach with audit trails and customer segmentation",
    "Fraud follow-up workflows with escalation paths",
    "Campaign reporting for branch and digital-service adoption",
  ],
  Telecom: [
    "Retention campaigns for plan changes and churn-risk segments",
    "Service outage callbacks and proactive communication",
    "Upgrade eligibility outreach with agent guidance",
  ],
  Collections: [
    "Promise-to-pay follow-up workflows",
    "Contact strategy optimization by segment",
    "Compliance-aware call outcome tracking",
  ],
} as const;

function ContactCenterMapper() {
  const [industry, setIndustry] = useState<keyof typeof industryUseCases>("Healthcare");
  const useCases = industryUseCases[industry];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Industry context</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="text-sm font-medium text-slate-700" htmlFor="industry">
            Select an industry
          </label>
          <Select className="mt-2" id="industry" value={industry} onChange={(event) => setIndustry(event.target.value as keyof typeof industryUseCases)}>
            {Object.keys(industryUseCases).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            These examples demonstrate the workflow. Real product decisions still require customer research and market evidence.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>{industry} use-case map</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {useCases.map((useCase) => (
            <div key={useCase} className="flex gap-3 rounded-md border border-slate-200 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-700">{useCase}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

type FeatureScore = {
  id: string;
  name: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
};

const starterFeatures: FeatureScore[] = [
  { id: "a", name: "Requirements clarity scoring", reach: 250, impact: 3, confidence: 75, effort: 2 },
  { id: "b", name: "Customer theme clustering", reach: 180, impact: 4, confidence: 65, effort: 3 },
  { id: "c", name: "Launch readiness dashboard", reach: 120, impact: 5, confidence: 70, effort: 4 },
  { id: "d", name: "Industry use-case mapper", reach: 90, impact: 2, confidence: 80, effort: 1.5 },
];

function riceScore(feature: FeatureScore) {
  return Math.round(((feature.reach * feature.impact * feature.confidence) / 100 / feature.effort) * 10) / 10;
}

function RoadmapPrioritization() {
  const [features, setFeatures] = useState(starterFeatures);
  const ranked = useMemo(() => [...features].sort((a, b) => riceScore(b) - riceScore(a)), [features]);

  const updateFeature = (id: string, key: keyof Omit<FeatureScore, "id" | "name">, value: number) => {
    const limits = { reach: 1000000, impact: 5, confidence: 100, effort: 1000 } as const;
    const fallback = key === "effort" ? 0.5 : 0;
    const safeValue = Number.isFinite(value) ? value : fallback;
    setFeatures((current) =>
      current.map((feature) =>
        feature.id === id
          ? {
              ...feature,
              [key]: Math.min(limits[key], Math.max(fallback, safeValue)),
            }
          : feature,
      ),
    );
  };

  return (
    <div className="grid gap-5">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Prioritization table</CardTitle>
          <p className="text-sm text-slate-600">Edit reach, impact, confidence, or effort to see the ranking change.</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-normal text-slate-500">
                  <th className="py-3 pr-4">Feature</th>
                  <th className="px-3 py-3">Reach</th>
                  <th className="px-3 py-3">Impact</th>
                  <th className="px-3 py-3">Confidence %</th>
                  <th className="px-3 py-3">Effort</th>
                  <th className="px-3 py-3">Priority score</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-900">{feature.name}</td>
                    {(["reach", "impact", "confidence", "effort"] as const).map((key) => (
                      <td key={key} className="px-3 py-3">
                        <input
                          aria-label={`${feature.name} ${key}`}
                          className="h-10 w-24 rounded-md border border-input px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          min={key === "effort" ? 0.5 : 0}
                          max={key === "reach" ? 1000000 : key === "effort" ? 1000 : key === "confidence" ? 100 : 5}
                          onChange={(event) => updateFeature(feature.id, key, Number(event.target.value))}
                          step={key === "effort" ? 0.5 : 1}
                          type="number"
                          value={feature[key]}
                        />
                      </td>
                    ))}
                    <td className="px-3 py-3 font-semibold text-teal-700">{riceScore(feature)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Current priority order</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {ranked.map((feature, index) => (
            <div key={feature.id} className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-white p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Rank {index + 1}</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">{feature.name}</p>
              </div>
              <Badge tone={index === 0 ? "success" : "neutral"}>{riceScore(feature)}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const demoComponents: Record<DemoId, () => ReactElement> = {
  prd: PrdHealthChecker,
  signals: CustomerSignalTriage,
  launch: LaunchReadinessChecklist,
  mapper: ContactCenterMapper,
  roadmap: RoadmapPrioritization,
};

export function DemoLab() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("prd");
  const activeSummary = demos.find((demo) => demo.id === activeDemo) ?? demos[0];
  const ActiveDemo = demoComponents[activeDemo];

  return (
    <section id="demo-lab" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Demo lab"
          title="Working React demos for common product decisions."
          description="Each demo is interactive and runs entirely in the browser. It shows the intended workflow without using company data or external AI services."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {demos.map((demo) => {
            const Icon = demoIcons[demo.id];
            const isActive = activeDemo === demo.id;
            return (
              <Card key={demo.id} className={isActive ? "border-teal-500 bg-white shadow-soft" : "border-slate-200 bg-white"}>
                <CardHeader>
                  <Icon className="mb-3 h-5 w-5 text-teal-600" aria-hidden="true" />
                  <CardTitle>{demo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{demo.description}</p>
                  <p className="mt-3 text-sm font-medium text-slate-800">Problem addressed: {demo.problem}</p>
                  <Button
                    aria-pressed={isActive}
                    className="mt-5 w-full"
                    onClick={() => setActiveDemo(demo.id)}
                    variant={isActive ? "default" : "secondary"}
                  >
                    Open Demo
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <Badge tone="success">Interactive demo</Badge>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">{activeSummary.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{activeSummary.problem}</p>
            </div>
            <div className="lg:max-w-xl">
              <PrototypeNotice />
            </div>
          </div>
          <ActiveDemo />
        </div>
      </div>
    </section>
  );
}
