const { MessageChannel } = require('worker_threads');
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => {
  console.log(message);
  console.log(typeof message);
  message.fill(99, 3, 4);
});

port2.on('close', () => console.log('closed!'));

port2.on('messageerror', (err) => console.error('port 1 on message error', error));

const uint8Array = new Uint8Array([1, 2, 3, 4]);

// This posts a copy of `uint8Array`:
port2.postMessage(uint8Array);
// This does not copy data, but renders `uint8Array` unusable:
port2.postMessage(uint8Array, [uint8Array.buffer]);

// The memory for the `sharedUint8Array` will be accessible from both the
// original and the copy received by `.on('message')`:
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
port2.postMessage(sharedUint8Array);

// This transfers a freshly created message port to the receiver.
// This can be used, for example, to create communication channels between
// multiple `Worker` threads that are children of the same parent thread.
const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [otherChannel.port1]);
