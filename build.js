const stylePlugin = require('esbuild-style-plugin');


require("esbuild").build({
  entryPoints: ["src/index.js", "src/index.html"],
  outdir: "dist",
  bundle: true,
  treeShaking: false,
  // watch: true,
  loader: {
    ".html": "copy",
    ".js": "tsx",

    '.svg': 'dataurl',
    '.vanilla-css': 'css',
    '.ttf': 'file',


  },
  plugins: [
      {
        name: 'neos-ui-build',
        setup: ({onResolve, onLoad, resolve}) => {
            // prefix Fontawesome with "neos-" to prevent clashes with customer Fontawesome
            onLoad({filter: /@fortawesome\/fontawesome-svg-core\/styles\.css$/}, async ({path}) => {
                const contents = (await require('fs/promises').readFile(path)).toString();

                const replacedStyle = contents.replace(/svg-inline--fa/g, "neos-svg-inline--fa");

                return {
                    contents: replacedStyle,
                    loader: "css"
                }
            })
        },
    },
    stylePlugin({
      // process all .css and .scss files
      // but exclude those files that are in the dir
      // - @ckeditor
      // - @fortawesome/fontawesome-svg-core
      cssModulesMatch: /\.s?css$/,
      postcss: {
          plugins: [
              require('postcss-import'),
              require('postcss-nested'),
              require('postcss-hexrgba'),
              require('autoprefixer'),
          ]
      }
    }),
  ]
})
