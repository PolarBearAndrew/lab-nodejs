const assert = require('assert');
const { Worker, MessageChannel, MessagePort, isMainThread, parentPort } = require('worker_threads');
const { simulateHeavyCPU } = require('./_comm');
if (isMainThread) {
  const worker = new Worker(__filename);
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) => {
    console.log('received:', value);
  });
} else {
  parentPort.once('message', async (value) => {
    assert(value.hereIsYourPort instanceof MessagePort);

    await simulateHeavyCPU();

    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}
