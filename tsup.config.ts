import { defineConfig } from "tsup";
import vue from "esbuild-plugin-vue3";

export default defineConfig([
  {
    entry: { "react/index": "src/components/index.ts" },
    format: ["esm", "cjs"], dts: true, sourcemap: true, clean: true, treeshake: true,
    external: ["react", "react-dom", "react/jsx-runtime"],
    outExtension: ({ format }) => ({ js: format === "cjs" ? ".cjs" : ".js" }),
  },
  {
    entry: { "vue/index": "src/vue/index.ts" },
    format: ["esm", "cjs"], dts: false, sourcemap: true, clean: false,
    esbuildPlugins: [vue()], external: ["vue"],
    outExtension: ({ format }) => ({ js: format === "cjs" ? ".cjs" : ".js" }),
  },
]);
