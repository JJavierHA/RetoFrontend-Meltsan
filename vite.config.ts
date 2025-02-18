import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Esto permite que sea accesible desde fuera del contenedor
    port: 4173, // Puerto en el que deseas que se sirva la aplicación
  },
});
