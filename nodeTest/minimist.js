/**
 * 解析node命名携带的参数
 * example1：node example/parse.js -a beep -b boop     args: { _: [], a: 'beep', b: 'boop' }
 * example2: node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz  
 * 
 * { _: [ 'foo', 'bar', 'baz' ],
 *    x: 3,
 *    y: 4,
 *    n: 5,
 *    a: true,
 *    b: true,
 *    c: true,
 *    beep: 'boop' 
 * }  
 */

const args = require('minimist')(process.argv.slice(2));
console.log(args)