const workerpool = require('workerpool'); // https://github.com/josdejong/workerpool
const pool = workerpool.pool();

// const sharedObj = {};

const delay = (ms, msg) =>
  new Promise((resolve) =>
    setTimeout(() => {
      // sharedObj[msg] = true; // ReferenceError: sharedObj is not defined
      console.log(msg);
      resolve();
    }, ms)
  );

async function main() {
  const jobs = [];

  console.time('run all jobs');

  for (let i = 0; i < 10; i++) {
    jobs.push(pool.exec(delay, [3000, `job ${i} done`]));
  }

  await Promise.all(jobs);

  console.timeEnd('run all jobs');
  // console.log(sharedObj);

  pool.terminate(); // terminate all workers when done
}

main();
