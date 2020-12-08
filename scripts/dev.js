const execa = require("execa");
const { targets, fuzzyMatchTarget } = require('./utils')
const target = fuzzyMatchTarget(process.argv[2] || 'runtime-dom')
execa(
  'rollup',
  [
    '--watch',
    '--config rollup.config.js'
  ],
  {
    stdio: 'inherit'
  }
).then(res => {
  // console.log("res=" ,res)
})