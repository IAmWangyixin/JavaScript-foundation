/**
 * bind 函数会创建一个新函数。当新函数被调用时，bind() 的第一个参数将作为它运行时的 this,
 * 之后的一序列参数将会在传递的实参前传入作为它的参数。
 * 注意：一个绑定的函数也能使用 new 操作符创建对象：这种行为就像把原函数当作构造函数，提供的 this 将忽略，
 * 同时调用时的参数被提供给模拟函数。
 */

Function.prototype.myBind = function(context) {
  const self = this;
  // const args = Array.prototype.slice.call(arguments, 1);
  const args = [...arguments].slice(1);

  const funcBound = function () {
    return self.apply((this instanceof funcBound) ? self : context, [...args, ...arguments]);
  }
  function F() {}
  F.prototype = self.prototype;
  funcBound.prototype = new F();
  return funcBound;
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);

}

var bindFoo = bar.myBind(foo, 'daisy');
bindFoo('18');