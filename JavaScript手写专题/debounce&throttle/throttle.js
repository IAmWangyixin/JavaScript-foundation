/**
 * 节流：
 * 持续触发的函数，在n秒内只执行一次。
 * 
 * 具体又分为：第一次立即执行，和结束后再执行一次
 */
function throttle(func, wait, options) {
  let timeoutId, context, args;
  let previous = 0;
  let options = options || {};

  const getNowTimeStamp = () => (Date.now() || new Date().getTime());

  const later = () => {
    const now = getNowTimeStamp();
    timeoutId = null;
    previous = options.leading === false ? 0 : now;
    func.apply(context, args);
    context = args = null;
  }

  const throttled = function () {
    context = this;
    args = arguments;
    const now = getNowTimeStamp();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      previous = now;
      func.apply(context, args);
      // 置为空是为了 js 的垃圾回收机制
      if (!timeout) context = args = null;
    } else if (!timeoutId && options.trailing !== false) {
      timeoutId = setTimeout(later, remaining);
    }
  }

  return throttled;
}

// 结束后再执行一次
// function throttle(fn, wait) {
//   let timer = null;

//   return function() {
//     if(!timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, arguments);
//         timer = null;
//       }, wait);
//     }
//   }
// }

// // 第一次立即执行
// function throttle(fn, wait) {
//   let previous = 0;

//   return function () {
//     let now = Date.now() || new Date.getTime();
//     if (now - previous > wait) {
//       fn.apply(this, arguments);
//       previous = now;
//     }
//   }
// }

// 双剑合璧, 通过 options 配置决定第一次是否立即执行以及结束后是否再执行一次。
// function throttle(fn, wait, options) {
//   let timer, context, args;
//   let previous = 0;

//   const getNowTimeStamp = () => (Date.now() || new Date().getTime());

//   const later = () => {
//     previous = getNowTimeStamp();
//     timer = null;
//     fn.apply(context, args);
//   }

//   const throttled = function () {
//     context = this;
//     args = arguments;
//     let now = getNowTimeStamp();
//     let remaining = wait - (now - previous);

//     if (remaining <= 0 || remaining > wait) {
//       if (timer) {
//         clearTimeout(time);
//         timer = null;
//       }
//       previous = now;
//       fn.apply(context, args);
//     } else if(!timer){
//       setTimeout(later, remaining);
//     }
//   }

//   return throttled;
// }
