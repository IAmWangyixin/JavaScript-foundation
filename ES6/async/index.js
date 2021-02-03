function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  // 每隔 1s 输出一个值
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    // 使用 await 实现了让程序停顿指定的时间
    await sleep(1000);
  }
}

one2FiveInAsync();
