const execa = require("execa");

console.log(typeof execa)
execa("rollup",["-c","-w"],{stdio:"inherit"})
