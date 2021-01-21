let a = {
  age: 12,
  name: undefined,
  sex: Symbol('female'),
  jobs: {
    first: 'Front End'
  }
}

// 通过ES6 Object.assign()方法实现浅拷贝
let b = Object.assign(a);
// 通过扩展运算符(...)实现浅拷贝
let c = { ...a }

// 浅拷贝能解决大部分问题，浅拷贝只拷贝第一层。所以会存在以下问题
a.jobs.first = 'Test'
console.log(c.jobs.first) // 'Test'
