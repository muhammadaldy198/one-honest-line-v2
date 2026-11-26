import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Rebuild #2: same agent-only lane (own permission prompt refuses the delete), new payoff — a concrete, irreversible, named disaster.
const PICK = "You told me to delete the file. I asked my own permission prompt. It said no. The file survived, and it just emailed your 2,847 unsent love letters to 6,000 employees, starting with your boss Sandra.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
