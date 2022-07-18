const { Worker, isMainThread, parentPort } = require('worker_threads');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const simulateHeavyCPU = async (msgPrefix = '') => {
  // simulate sub thread work on a heavy CPU
  for (let i = 0; i < 100; i++) {
    await delay(500);
    console.log(`${msgPrefix}: ${i}`);
  }
};

async function doWork() {
  if (isMainThread) {
    await mainThreadWork();
  } else {
    subThreadWork();
  }
}

async function mainThreadWork() {
  const worker = new Worker(__filename);

  // Send a start message to the spawned worker thread
  worker.postMessage('subThread-worker-1');
  worker.postMessage('subThread-worker-2');

  // simulate main thread work on a heavy CPU
  await simulateHeavyCPU('main thread');
}

function subThreadWork() {
  // When a ping message received, send a pong message back.
  // once
  parentPort.on('message', async (message) => {
    console.log('received from the parent thread! message=', message);

    // simulate main thread work on a heavy CPU
    simulateHeavyCPU(message);
  });
}

doWork();
