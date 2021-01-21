const { log } = console;
// 读取服务器上的文件
function readAjaxFile(url) {
  // 创建xhr
  const xhr = new XMLHttpRequest();
  // 监听状态
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      log(xhr.responseText);
    }
  };
  // 打开请求
  xhr.open('GET', url, true);
  // 发送数据
  xhr.send(null);
}

// <input type="file" />
/**
 * 读取本地计算机的文件
 * @param {string} id input 元素id
 */
function readInputFile(id) {
  const file = document.getElementById(id).files[0];
  // 实例化
  const reader = new FileReader();
  // 读取文件
  reader.readAsText(file);
  // 监听返回
  reader.onload = function (data) {
    log(data);
  };
}

function getData() {
  readInputFile('readFile');
}

function changeFile(files) {
  log(files[0]);
  if (!files || !files[0]) {
    return false;
  }
  const file = files[0];
  // 实例化
  const reader = new FileReader();
  // 读取文件
  reader.readAsText(file);
  // 监听返回
  reader.onload = function (data) {
    log(data);
  };
}

