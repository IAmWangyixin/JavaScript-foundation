function myNew() {
  Constructor = [].shift.call(arguments) // 取得外部传入的构造器

  function F() {}
  F.prototype = Constructor.prototype;
  const obj = new F();// 指向正确

  const result = Constructor.apply(obj, arguments);
  // 确保返回的始终是个对象。
  return Object.prototype.toString.call(result).match(/^\[object (\w+)\]$/)[1] === 'Object' ? result : obj;
}

function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

var person = myNew(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
