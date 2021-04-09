let el = document.getElementsByTagName('*');

let elObj = {};
let max = 0;

for (var i = 0; i < el.length; i++) {
  if (!elObj[el[i].tagName.toLowerCase()]) {
    elObj[el[i].tagName.toLowerCase()] = 1;
  } else {
    elObj[el[i].tagName.toLowerCase()]++;
    max = Math.max(max, elObj[el[i].tagName.toLowerCase()]);
  }
}

console.log(elObj, max)