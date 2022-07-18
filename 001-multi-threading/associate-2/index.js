const assert = require('assert');
const { Worker, MessageChannel, MessagePort, isMainThread, parentPort } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename);
  // Create a channel in which further messages will be sent
  const subChannel = new MessageChannel();

  // 1
  // Send it through the pre-existing global channel
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);

  // 3
  // Receive messages from the worker thread on the custom channel
  subChannel.port2.on('message', (value) => {
    console.log('received:', value);
  });
} else {
  // Receive the custom channel info from the parent thread
  parentPort.once('message', (value) => {
    assert(value.hereIsYourPort instanceof MessagePort);
    // console.log('here is parent port, received:', value);

    // 2
    // Send message to the parent thread through the channel
    value.hereIsYourPort.postMessage('the worker sent this');
    value.hereIsYourPort.close();
  });
}
