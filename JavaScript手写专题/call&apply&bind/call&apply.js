/**
 * 在使用一个指定this值和若干个指定参数的前提下调用某个函数或方法。
 */
Function.prototype.myCall = function (context) {
  context = context || window;
  // 获取调用 call 的函数，用 this 获取。bar.myCall(foo) => context.fn = bar;
  context.fn = this;
  console.log(this === bar);
  
  // 从不定长的参数中去除第二个到最后一个放到数组里，并传递到执行的函数中去。
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  // 不使用ES6方法。
  /* var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    // 若直接push argument[1]的值，会报 red is undefined
    args.push('arguments[' + i + ']');
  } 
  console.log('come')
  // console.log(args.join(','))
  // 拼接的是字符串， 这样是不行滴
  // var result = context.fn(args.join(','));
  // eval 接收字符串作为参数，并将其当作 JS 代码进行执行。
  var result = eval('context.fn(' + args + ')');
  */
  delete context.fn;
  return result;
}

// example
foo = {
  value: 1
};

function bar(color) {
  console.log(this.value, color);
  return true;
}

console.log(bar.myCall(foo, ['bar']));
console.log(bar.myCall(foo, 'bar'));

Function.prototype.myApply = function(context, arr) {
  context = context || window;
  context.fn = this;
  let result;
  if(arr) {
    result = context.fn(...arr);
  } else {
    result = context.fn();
  }
  delete context.fn();
  return result;
}

console.log(bar.myApply(foo, ['bar']));
