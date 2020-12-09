'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const storeUtil = () => {
  console.log("kkk");
  return "klz"
};

const isString = (val) => {
  console.log("kkk");
  return typeof val === 'string'
};

const isObj = (val) => {
  return typeof val === 'string'
};

function compileToFunction (template){
  console.log("kkkk");
  console.log($);
}

exports.compiler = compileToFunction;
exports.isObj = isObj;
exports.isString = isString;
exports.storeUtil = storeUtil;
