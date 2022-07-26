const assert = require('assert');
const { Worker, MessageChannel, MessagePort, isMainThread, parentPort } = require('worker_threads');
const { simulateHeavyCPU } = require('./_comm');

if (isMainThread) {
  (async () => {
    console.time('all jobs');

    const keys = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk'];
    const jobs = [];

    for (const key of keys) {
      jobs.push(
        new Promise((resolve) => {
          const worker = new Worker(__filename);
          const subChannel = new MessageChannel();
          worker.postMessage({ key, callbackPort: subChannel.port1 }, [subChannel.port1]);
          subChannel.port2.on('message', () => {
            console.log('received:', key);
            resolve();
          });
        })
      );
    }

    console.log('job len', jobs.length);

    await Promise.all(jobs);

    console.timeEnd('all jobs');
  })();
} else {
  parentPort.once('message', async (value) => {
    assert(value.callbackPort instanceof MessagePort);

    await simulateHeavyCPU(value.key);

    value.callbackPort.postMessage('the worker is sending this');
    value.callbackPort.close();
  });
}
