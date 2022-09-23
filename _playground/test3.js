const len = 500000;
const arr = new Array(len);

console.time('arr[i]');
for (let i = 0; i < len; i += 1) {
  arr[i] = i;
}
console.timeEnd('arr[i]');

console.time('splice');
for (let i = 0; i < len; i += 1) {
  arr.splice(i, 1, i);
}
console.timeEnd('splice');
