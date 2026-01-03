import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/thumbnail_wala/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
