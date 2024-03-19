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
      plugins: [
        {
          name: "ignore-raw-folder",
          resolveId(source) {
            // Regular expression to match paths like "/src/.components/*/raw/"
            const pattern = /\/src\/\.components\/[^/]+\/_raw\//;
            if (pattern.test(source)) {
              return { id: source, external: true };
            }
          },
        },
      ],
    },
  },
});

// https://www.airplane.dev/blog/how-to-build-a-react-component-library
