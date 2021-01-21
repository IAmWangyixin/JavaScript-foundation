// module.exports = 'test'

// // module.exports = {};
// exports = {
//   name: 'json'
// }

// let count = 1;

// function increment() {
//   count++;
//   log()
// }

// function log() {
//   console.log(count)
// }

// module.exports = {
//   count,
//   increment
// }

// es6导出
// export default 1


// 以下结果与ES6 导出功能类似。
// exports.count = 1;

// exports.increment = function () {
//   exports.count++;
//   log()
// }

// function log() {
//   console.log(exports.count)
// }


export const a1 = true

import * as b from './a';

export const a2 = true;