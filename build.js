require("esbuild").build({
  entryPoints: ["src/index.js", "src/index.html"],
  outdir: "dist",
  bundle: true,
  logLevel: "info",
  loader: {
    ".html": "copy",
    ".js": "jsx"
  }
})
