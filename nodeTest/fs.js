const fs = require("fs");
const targets = fs.readdirSync('../packages').filter(f => {
  if (!fs.statSync(`../packages/${f}`).isDirectory()) {
    return false
  }
  return true
})

console.log(targets)
