// https://github.com/josdejong/workerpool

const workerpool = require('workerpool');
const { simulateHeavyCPU } = require('./_comm');
const pool = workerpool.pool({
  /**
   * minWorkers?: number | 'max' | undefined;
   * The minimum number of workers that must be initialized and kept available.
   * Setting this to 'max' will create maxWorkers default workers.
   */
  minWorkers: 'max',
  /**
   * maxWorkers?: number | undefined;
   * The default number of maxWorkers is the number of CPU's minus one.
   * When the number of CPU's could not be determined (for example in older browsers), maxWorkers is set to 3.
   */
  maxWorkers: 4,
  /**
   *  workerType?: 'auto' | 'web' | 'process' | 'thread' | undefined;
   * - In case of `'auto'` (default), workerpool will automatically pick a suitable type of worker:
   *   when in a browser environment, `'web'` will be used. When in a node.js environment, `worker_threads` will be used
   *   if available (Node.js >= 11.7.0), else `child_process` will be used.
   * - In case of `'web'`, a Web Worker will be used. Only available in a browser environment.
   * - In case of `'process'`, `child_process` will be used. Only available in a node.js environment.
   * - In case of `'thread'`, `worker_threads` will be used. If `worker_threads` are not available, an error is thrown.
   *   Only available in a node.js environment.
   */
  workerType: 'auto',
});

(async () => {
  console.time('all jobs');

  const keys = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk'];
  const jobs = [];

  for (const key of keys) {
    jobs.push(pool.exec(simulateHeavyCPU, [key]));
  }

  console.log('job len', jobs.length);

  await Promise.all(jobs).then(() => {
    pool.terminate();
  });

  console.timeEnd('all jobs');
})();
