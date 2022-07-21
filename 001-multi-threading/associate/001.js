const { Worker, isMainThread, parentPort } = require('worker_threads');

const sharedObject = {};

function doWork() {
  if (isMainThread) {
    mainThreadWork();
  } else {
    subThreadWork();
  }
}

function mainThreadWork() {
  const worker = new Worker(__filename);
  worker.postMessage('ping');
}

function subThreadWork() {
  // When a ping message received, send a pong message back.
  parentPort.once('message', (message) => {
    console.log(message + ' received from the parent thread!');
    parentPort.postMessage('pong');
  });
}

doWork();
