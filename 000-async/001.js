const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function someTask() {
  await delay(3000);
}

async function batchRunTask() {
  someTask();
  someTask();
  someTask();
}

async function run() {
  await batchRunTask();
}

console.time('run');

run();

console.timeEnd('run');

console.log('continue to do other job...');
