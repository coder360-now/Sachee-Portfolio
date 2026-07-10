import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Sachee-Portfolio/",
  plugins: [react()],
  optimizeDeps: {
    include: [],
    noDiscovery: true,
  },
});
