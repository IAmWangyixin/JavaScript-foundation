/**
 * 高频函数设置防抖功能后，函数触发后会延迟n秒执行，在n秒内若函数再次被触发，则重新计时。
 * @param {Function} func 防抖函数
 * @param {Number} wait 间隔时间
 * @param {Boolean} immediate 立即执行函数
 */
function debounce(func, wait, immediate) {
  let timer = null;
  let result;

  const debounced = function () {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      });
      if (callNow) {
        result = func.apply(this, arguments);
      }
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    }
    return result;
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
  }

  return debounced;
}


