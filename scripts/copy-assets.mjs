import { mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";
const jobs = [
  ["tokens/tokens.json", "dist/tokens/tokens.json"],
  ["styles/app.css", "dist/styles/app.css"],
  ["styles/keyframes.css", "dist/styles/keyframes.css"],
  ["styles/animate-utilities.css", "dist/styles/animate-utilities.css"],
];
for (const [from, to] of jobs) {
  await mkdir(join(to, ".."), { recursive: true });
  await copyFile(from, to);
  console.log(`copied ${from} → ${to}`);
}
console.log("assets copied ✔");
