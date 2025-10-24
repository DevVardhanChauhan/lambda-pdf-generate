import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

await build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	platform: "node",
	outfile: "dist/index.js",
	plugins: [nodeExternalsPlugin()],
	target: ["node20"],
});
