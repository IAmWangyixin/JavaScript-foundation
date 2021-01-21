const counter = require('./b')

// import a from './b';

// a(3);

console.log(counter)

// CommonJS 修改count++ 修改的是模块内的基础数据类型变量，不会改变exports.count，所以打印结果为1.
// counter.increment();
// console.log(counter.count);

// import { a1, a2 } from './b';

// console.log(a1, a2)