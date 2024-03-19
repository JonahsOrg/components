//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "my-components",
      fileName: "index.jsx",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});

// https://www.airplane.dev/blog/how-to-build-a-react-component-library
