import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue({ include: [/\.vue$/] }), react({ include: [/\.tsx?$/] }), tailwindcss()],
  resolve: { alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@tokens": fileURLToPath(new URL("./tokens", import.meta.url)),
    "@styles": fileURLToPath(new URL("./styles", import.meta.url)),
  } },
  server: { port: 5173, open: true },
});
