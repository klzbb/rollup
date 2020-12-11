import commonjs from 'rollup-plugin-commonjs'; // 这两个插件可以让你加载Node.js里面的CommonJS模块
import node from 'rollup-plugin-node-resolve'; // 这两个插件可以让你加载Node.js里面的CommonJS模块
import typescript from '@rollup/plugin-typescript';
import ts from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace'; // set the global variable to ts
import path from 'path';

const extensions = ['.js', '.ts', '.tsx'];
// ts
const tsPlugin = ts({
  tsconfig: path.resolve(__dirname, './tsconfig.json'), // 导入本地ts配置
  extensions,
});

export default {
  input: './packages/vue/src/index.ts',
  output: {
    name: 'vue',

    file: 'dist/bund.js',
    format: 'iife',
  },
  plugins: [
    // node(),
    // commonjs(),
    tsPlugin,
    replace({
      __DD: JSON.stringify(process.env),
      __HH: true,
    }),
  ],
};
