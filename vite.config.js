import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodePackageImporter } from "sass-embedded";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "build",
	},
	server: {
		host: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				importers: [new NodePackageImporter()],
			},
		},
	},
});
