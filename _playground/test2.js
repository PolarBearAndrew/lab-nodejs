import * as _ from 'lodash';

const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

const keyByShypyard = (arr, key) => {
  const m = {};

  for (const item of arr) {
    m[item[key]] = item;
  }

  return m;
};

const len = 50000;
const arr = new Array(len);

// console.time('prepare');
for (let i = 0; i < len; i += 1) {
  arr[i] = { _key: `SKU-${i}`, myValue: 'abc' };
}
const gen = arr.map((i) => [i._key, i]);
// console.timeEnd('prepare');

// > 3min
// console.time('you dont need');
// keyBy(arr, '_key');
// console.timeEnd('you dont need');

// ~30ms
console.time('lodash');
_.keyBy(arr, '_key');
console.timeEnd('lodash');

// ~10ms
console.time('shypyard');
keyByShypyard(arr, '_key');
console.timeEnd('shypyard');

console.time('Object.fromEntries');
Object.fromEntries(arr.map((i) => [i._key, i]));
console.timeEnd('Object.fromEntries');

console.time('Object.fromEntries (pure)');
Object.fromEntries(gen);
console.timeEnd('Object.fromEntries (pure)');
