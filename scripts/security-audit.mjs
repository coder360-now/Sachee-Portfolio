import { spawnSync } from "node:child_process";

const result = spawnSync("npm", ["audit", "--audit-level=high", "--json"], {
  encoding: "utf8",
  shell: process.platform === "win32",
});

const output = result.stdout.trim();
const errorOutput = result.stderr.trim();

function parseAuditJson(text) {
  const start = text.indexOf("{");
  if (start === -1) {
    return null;
  }

  try {
    return JSON.parse(text.slice(start));
  } catch {
    return null;
  }
}

const audit = parseAuditJson(output);

if (audit?.metadata?.vulnerabilities) {
  const { critical = 0, high = 0 } = audit.metadata.vulnerabilities;

  if (critical > 0 || high > 0) {
    console.error(`npm audit found ${critical} critical and ${high} high severity vulnerabilities.`);
    process.exit(1);
  }

  console.log("npm audit passed for high and critical severity vulnerabilities.");
  process.exit(0);
}

if (audit?.error) {
  console.warn("npm audit did not return vulnerability data. Allowing deploy because the audit service returned an error.");
  if (audit.error.summary) {
    console.warn(audit.error.summary);
  }
  if (audit.error.detail) {
    console.warn(audit.error.detail);
  }
  process.exit(0);
}

if (result.status === 0) {
  console.log("npm audit passed.");
  process.exit(0);
}

console.error("npm audit failed before vulnerability data could be read.");
if (errorOutput) {
  console.error(errorOutput);
}
if (output) {
  console.error(output);
}
process.exit(result.status ?? 1);
