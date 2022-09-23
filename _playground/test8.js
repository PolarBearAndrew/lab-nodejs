const fs = require('fs');

const len = 7741 * 11;
const scheduler = {
  cacheHit: [],
  cacheKeys: [],
};

const result = { name: 'andrew' };
// const result = JSON.parse(fs.readFileSync('./test.json').toString());

console.time('prepare');
for (let i = 0; i < len; i += 1) {
  scheduler.cacheKeys.push(
    new Promise((r) => {
      scheduler.cacheHit.push(r);
    })
  );
}
console.timeEnd('prepare');

(async () => {
  process.nextTick(() => {
    for (let i = 0; i < len; i += 1) {
      scheduler.cacheHit[i](result);
    }
  });

  console.time('run');
  const data = await Promise.all(scheduler.cacheKeys);
  console.timeEnd('run');

  // console.log('data', data);
})();
