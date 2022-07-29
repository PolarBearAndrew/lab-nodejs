const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// about 5 seconds
const simulateHeavyCPU = async (msgPrefix = '') => {
  tCtrl = `${msgPrefix}-heavy-cpu`;

  console.time(tCtrl);
  for (let times = 0; times < 10000; times++) {
    let a = 0;
    for (let i = 0; i < 1000000; i++) {
      a += 1;
    }
  }
  console.timeEnd(tCtrl);
  return tCtrl;
};

module.exports = {
  delay,
  simulateHeavyCPU,
};
