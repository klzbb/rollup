(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vue = {}));
}(this, (function (exports) { 'use strict';

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
  }

  exports.compiler = compileToFunction;
  exports.isObj = isObj;
  exports.isString = isString;
  exports.storeUtil = storeUtil;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
