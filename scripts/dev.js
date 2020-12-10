const execa = require("execa");

execa("rollup",["-c","-w"],{stdio:"inherit"})
