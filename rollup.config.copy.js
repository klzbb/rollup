
/* /build/build.js */
import buble from 'rollup-plugin-buble';//在rollup.js打包的过程中进行代码编译，将ES6+代码编译成ES2015标准
import commonjs from 'rollup-plugin-commonjs';//这两个插件可以让你加载Node.js里面的CommonJS模块
import node from 'rollup-plugin-node-resolve';//这两个插件可以让你加载Node.js里面的CommonJS模块
import babel from 'rollup-plugin-babel';//打包的时候使用Babel
import {uglify} from 'rollup-plugin-uglify';//压缩、美化js文件
 
const path = require('path');
const resolve = _path => path.resolve(__dirname,'./',_path);
const version = process.env.VERSION || require('./package.json').version;
const banner = 
`/* !
  * library v${version}
  * https://github.com/  (github address)
  * 
  * (c) ${new Date().getFullYear()} Zoro
  */
`;
 
const outputs = [{
    file: resolve('dist/bundle.js'),
    format: 'umd',
    env: 'development'
},{
    file: resolve('dist/bundle.min.js'),
    format: 'umd',
    env: 'production'
},{
    file: resolve('dist/bundle.common.js'),
    format: 'cjs'
},{
    file: resolve('dist/bundle.esm.js'),
    format: 'es'
},
{
    file: resolve('dist/bundle.iife.js'),
    format: 'iife'
}];
 
function buildRollupConfig(output){
    let config = {
        input: resolve('packages/vue/src/index.ts'),
        plugins: [
            node(),
            commonjs(),
            babel({
                extensions: [".js"],
                runtimeHelpers: true,
                exclude: ["node_modules/**"]
            })
        ],
        output: {
            file: output.file,
            format: output.format,
            banner,
            name: 'library'
        }
    };
 
    // if(output.env && output.env.includes('prod')){
    //     config.plugins.push(uglify());
    // }
 
    return config;
}
 
export default outputs.map(buildRollupConfig);
