const { Worker, SHARE_ENV } = require('worker_threads');
new Worker('process.env.SET_IN_WORKER = "foo"', { eval: true, env: SHARE_ENV }).on('exit', () => {
  console.log(process.env.SET_IN_WORKER); // Prints 'foo'.
});
