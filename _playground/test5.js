const len = 7441 * 11;
const scheduler = {
  cacheHit: [],
  cacheKeys: [],
};

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
      scheduler.cacheHit[i]({});
    }
  });

  console.time('run');
  const data = await Promise.all(scheduler.cacheKeys);
  console.timeEnd('run');
})();
