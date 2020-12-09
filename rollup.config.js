console.log("in rollup.config.js")
const path = require("path")

const rollupConfig = {
  input: path.resolve(__dirname,"./packages/vue/index.js"),
  output:{
    file:'dist/bund.js',
    name:"vue",
    format:'cjs'
  },
  watch:{
    exclude: 'node_modules/**'
  }
}
export default rollupConfig;