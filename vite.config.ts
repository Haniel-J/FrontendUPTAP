import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Configuración principal de Vite
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Alias para poder usar "@/..."
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});