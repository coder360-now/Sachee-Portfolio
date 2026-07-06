import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/sachee-product-portfolio/",
  plugins: [react()],
  optimizeDeps: {
    include: [],
    noDiscovery: true,
  },
});
