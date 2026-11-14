import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "/" because the site is served from the custom domain tekkhatri.ninja
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
