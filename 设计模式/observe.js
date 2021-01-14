const queueObserve = new Set();

const observe = (fn) => queueObserve.add(fn);
const observable = (obj) => new Proxy(obj, { set });

const person = observable({
  name: 'nina',
  age: 20
});

const print = () => {
  console.log(`${person.name}, ${person.age}`);
};
observe(print);

// 输出:neo,20
// Proxy,Reflect

function set(target, propKey, value, receiver) {
  const result = Reflect.set(target, propKey, value, receiver);
  queueObserve.forEach(observe => observe());
  return result;
}

setTimeout(() => {
  person.name = 'neo';
}, 10000)
