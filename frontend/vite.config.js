import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodePackageImporter } from "sass-embedded";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
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
