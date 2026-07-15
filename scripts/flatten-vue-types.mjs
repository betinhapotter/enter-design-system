import { cp, rm, access } from "node:fs/promises";
import { constants } from "node:fs";
const SRC = "dist/vue-types", DEST = "dist/vue";
try { await access(SRC, constants.F_OK); }
catch { console.error("dist/vue-types não encontrado — rode vue-tsc antes."); process.exit(1); }
await cp(SRC, DEST, { recursive: true });
await rm(SRC, { recursive: true, force: true });
console.log("vue types → dist/vue ✔");
