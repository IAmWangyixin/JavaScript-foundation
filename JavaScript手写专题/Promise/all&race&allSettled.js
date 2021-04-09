function all(iterator) {
  let count = 0;
  let elementCount = 0;
  let result = [];
  let anErrorOccurred = false;
  return new Promise((resolve, reject) => {
    for (let item of iterator) {
      const currentIndex = count;//保证结果与 iterator 中的 promise 顺序一致。
      Promise.resolve(item)
        .then(data => {
          if (anErrorOccurred) return;
          console.log(count, elementCount, currentIndex);
          
          result[currentIndex] = data;
          elementCount++;
          if (elementCount === iterator.length) {
            resolve(result);
          }
        })
        .catch(e => {
          if (anErrorOccurred) return;
          anErrorOccurred = true;
          reject(e);
        });
      count++;
    }
    if(count === 0) {
      resolve([]);
    }
  });
}

// test
/* all([
  new Promise(
  (resolve) => setTimeout(
    () => resolve(1),
  800)), 
  new Promise(
  (resolve) => setTimeout(
    () => resolve(2),
  2000)),
  new Promise(
  (resolve) => setTimeout(
    () => resolve(3),
  1200))]) 
 */

function race(iterator) {
  let occurred = false;
  return new Promise((resolve, reject) => {
    for (let item of iterator) {
      Promise.resolve(item)
        .then(data => {
          if (occurred) return;
          occurred = true;
          resolve(data);
        })
        .catch(e => {
          if (occurred) return;
          occurred = true;
          reject(e);
        });
      count++;
    }
  });
}
