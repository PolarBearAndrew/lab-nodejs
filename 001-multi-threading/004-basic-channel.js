const { MessageChannel, threadId } = require('worker_threads');
const { simulateHeavyCPU } = require('./_comm.js');

// channel create for two-way communication between main and worker
// port1 <- -> port2
const { port1, port2 } = new MessageChannel();

port2.on('message', async (message) => {
  console.log(`message=${message}, worker_id=${threadId}`);
  await simulateHeavyCPU(message);
});
port2.on('close', () => console.log('closed!'));

// passing 3 message into 1 channel (with heavy CPU job)
console.log('posting message...');
port1.postMessage('aaa');

console.log('posting message...');
port1.postMessage('bbb');

console.log('posting message...');
port1.postMessage('ccc');
port1.close();

// posting message...
// posting message...
// posting message...
// message=aaa, worker_id=0
