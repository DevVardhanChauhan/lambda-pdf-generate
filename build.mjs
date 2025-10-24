import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

console.time("✅ Build completed in");

await build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	platform: "node",
	outfile: "dist/index.js",
	plugins: [nodeExternalsPlugin()],
	target: ["node22"],
});

console.timeEnd("✅ Build completed in");
